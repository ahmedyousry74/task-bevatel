<template>
  <section
    class="tasks__layout pt-[30px] lg:px-[40px] px-[24px] w-full flex justify-start items-start flex-col gap-10"
  >
    <div
      class="pb-5 border-b border-solid border-[#ccc] w-full flex justify-between items-center flex-row flex-wrap gap-3"
    >
      <h3 class="text-second-color font-semibold text-[20px]">Edit task</h3>
    </div>
    <div
      class="flex justify-start items-start flex-col gap-3 w-full bg-[#fff] shadow-md sm:p-[32px] px-[12px] py-[25px] rounded-[8px]"
    >
      <v-text-field
        density="comfortable"
        placeholder="Name"
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
        placeholder="Name"
        prepend-inner-icon="mdi-account-circle-outline"
        variant="outlined"
        class="w-full"
        v-model="Gettask.description"
        :error-messages="task$.description.$errors.map((e) => e.$message)"
        @blur="task$.description.$touch"
        @input="task$.description.$touch"
      ></v-text-field>

      <v-text-field
        class="w-full"
        density="comfortable"
        placeholder="Email address"
        prepend-inner-icon="mdi-phone"
        variant="outlined"
        v-model="Gettask.phone"
        :error-messages="task$.phone.$errors.map((e) => e.$message)"
        @blur="task$.phone.$touch"
        @input="task$.phone.$touch"
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
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";
import { ref, computed, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  helpers,
  numeric,
  email,
  minLength,
  maxLength,
} from "@vuelidate/validators";
const router = useRouter();
const route = useRoute();
const store = useStore();
const toast = useToast();
const loading = ref(false);

// get task details
const Gettask = computed(
  () => store.getters["tasks/gettask"]
);
store.dispatch("tasks/Gettask", route.params.id);




const rules = {
  title: {
    required: helpers.withMessage("Name is required", required),
  },
  description: {
    required: helpers.withMessage("Name is required", required),
  },
  email: {
    required: helpers.withMessage("Email is required", required),
    email: helpers.withMessage("Email is not valid", email),
  },
  phone: {
    required: helpers.withMessage("Phone is required", required),
    numeric: helpers.withMessage("Phone is not valid", numeric),
    minLength: helpers.withMessage("Phone must be 11 digit", minLength(11)),
    maxLength: helpers.withMessage("Phone must be 11 digit", maxLength(11)),
  },
  status: {
    required: helpers.withMessage("Status is required", required),
  },
};

const taskPAYLOAD = computed(() => {
  const PAYLOAD = {
    name: Gettask.value.name,
    email: Gettask.value.email,
    phone: Gettask.value.phone,
    status: Gettask.value.status,
  };
  return PAYLOAD;
});

const task$ = useVuelidate(rules, Gettask);


const submit = async () => {
  loading.value = false;
  try {
    const validateForm = await task$.value.$validate();
    if (validateForm) {
      loading.value = true;
      const res = await store.dispatch(
          "tasks/edittask",{
            taskID: route.params.id,
            payload: taskPAYLOAD.value
          }
        );
        toast.success('task edited successfully');
        router.push("/tasks");
    }
  } catch (error) {
    toast.error('error');
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
