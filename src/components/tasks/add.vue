<template>
  <section
    class="tasks__layout pt-[30px] lg:px-[40px] w-full flex justify-start items-start flex-col gap-10"
  >
    <div
      class="pb-5 border-b border-solid border-[#ccc] w-full flex justify-between items-center flex-row flex-wrap gap-3"
    >
      <h3 class="text-second-color font-semibold text-[20px]">Add task</h3>
    </div>
    <div
      class="flex justify-start items-start flex-col gap-3 w-full bg-[#fff] shadow-md sm:p-[32px] px-[12px] py-[25px] rounded-[8px]"
    >
      <v-text-field
        density="comfortable"
        placeholder="title"
        prepend-inner-icon="mdi-account-circle-outline"
        variant="outlined"
        class="w-full"
        v-model="taskDATA.title"
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
        v-model="taskDATA.description"
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
        v-model="taskDATA.status"
        :error-messages="task$.status.$errors.map((e) => e.$message)"
        @blur="task$.status.$touch"
        @input="task$.status.$touch"
      ></v-autocomplete>
      <v-btn
        @click="submit"
        class="!bg-dark-color font-medium text-[15px] !text-light-color !h-[42px] !shadow-none mb-5 !tracking-[0]"
        :loading="loading"
      >
        Add task
      </v-btn>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";
import { ref, computed, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  helpers,
} from "@vuelidate/validators";

// Initialize router, store, and toast
const router = useRouter();
const store = useStore();
const toast = useToast();
const loading = ref<boolean>(false);

// Reactive state for task data
const taskDATA = reactive<{
  title: string;
  description: string;
  status: string | null; // status can be a string or null
}>({
  title: "",
  description: "",
  status: null,
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

// Computed payload for the task
const taskPAYLOAD = computed(() => {
  return {
    title: taskDATA.title,
    description: taskDATA.description,
    status: taskDATA.status,
  };
});

// Vuelidate instance for form validation
const task$ = useVuelidate(rules, taskDATA);

// Submit function to handle form submission
const submit = async () => {
  loading.value = true; // Set loading to true at the beginning
  try {
    const validateForm = await task$.value.$validate();
    if (validateForm) {
      await store.dispatch("tasks/handleAddtask", taskPAYLOAD.value);
      toast.success("Task added successfully");
      router.push("/tasks");
    }
  } catch (error) {
    toast.error("Something went wrong");
  } finally {
    loading.value = false; // Ensure loading is set to false in finally
  }
};
</script>

<style lang="scss" scoped></style>
