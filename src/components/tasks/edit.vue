<template>
  <section class="tasks__layout pt-[30px] lg:px-[40px] px-[24px] w-full flex justify-start items-start flex-col gap-10">
    <div class="pb-5 border-b border-solid border-[#ccc] w-full flex justify-between items-center flex-row flex-wrap gap-3">
      <h3 class="text-second-color font-semibold text-[20px]">Edit task</h3>
    </div>
    <div class="flex justify-start items-start flex-col gap-3 w-full bg-[#fff] shadow-md sm:p-[32px] px-[12px] py-[25px] rounded-[8px]">
      <!-- Check if Gettask is available before rendering -->
      <template v-if="Gettask">
        <v-text-field
          density="comfortable"
          placeholder="title"
          prepend-inner-icon="mdi-account-circle-outline"
          variant="outlined"
          class="w-full"
          v-model="Gettask.title"
          :error-messages="task$.title.$errors.map((e) => e.$message)"
          @blur="task$.title.$touch"
          @input="task$.title.$touch"
        ></v-text-field>
        <v-text-field
          density="comfortable"
          placeholder="description"
          prepend-inner-icon="mdi-account-circle-outline"
          variant="outlined"
          class="w-full"
          v-model="Gettask.description"
          :error-messages="task$.description.$errors.map((e) => e.$message)"
          @blur="task$.description.$touch"
          @input="task$.description.$touch"
        ></v-text-field>
        <v-autocomplete
          class="w-full"
          prepend-inner-icon="mdi-cog"
          variant="outlined"
          density="comfortable"
          label="Status"
          :items="['todo', 'inProgress', 'done']"
          v-model="Gettask.status"
          :error-messages="task$.status.$errors.map((e) => e.$message)"
          @blur="task$.status.$touch"
          @input="task$.status.$touch"
        ></v-autocomplete>
        <v-btn
          @click="submit"
          class="!bg-dark-color font-medium text-[15px] !text-light-color !h-[42px] !shadow-none mb-5 !tracking-[0]"
          :loading="loading"
        >
          Edit task
        </v-btn>
      </template>
      <template v-else>
        <p>Loading task details...</p> <!-- Fallback content while loading -->
      </template>
    </div>
  </section>
</template>


<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  helpers,
} from "@vuelidate/validators";

// Define task type
interface Task {
  title: string;
  description: string;
  status: string | null;
}

const router = useRouter();
const route = useRoute();
const store = useStore();
const toast = useToast();
const loading = ref(false);
const taskLoading = ref(true); // New loading state for task data

// get task details
const Gettask = computed<Task | null>(() => store.getters["tasks/gettask"]);

// Fetch task details when the component is mounted
onMounted(async () => {
  await store.dispatch("tasks/Gettask", route.params.id);
  taskLoading.value = false; // Set loading to false after fetching
});

// Validation rules
const rules = {
  title: {
    required: helpers.withMessage("Title is required", required),
  },
  description: {
    required: helpers.withMessage("Description is required", required),
  },
  status: {
    required: helpers.withMessage("Status is required", required),
  },
};

// Compute task payload based on Gettask
const taskPAYLOAD = computed((): Partial<Task> => {
  if (!Gettask.value) return {}; // Ensure safety
  return {
    title: Gettask.value.title,
    description: Gettask.value.description,
    status: Gettask.value.status,
  };
});

const task$ = useVuelidate(rules, Gettask);

const submit = async () => {
  loading.value = true; // Set loading to true at the beginning
  try {
    const validateForm = await task$.value.$validate();
    if (validateForm) {
      await store.dispatch("tasks/edittask", {
        taskID: route.params.id,
        payload: taskPAYLOAD.value,
      });
      toast.success("Task edited successfully");
      router.push("/tasks");
    }
  } catch (error) {
    toast.error("Error editing task");
  } finally {
    loading.value = false; // Ensure loading is set to false in finally
  }
};
</script>


<style lang="scss" scoped></style>
