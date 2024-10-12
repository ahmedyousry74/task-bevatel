<template>
  <v-dialog max-width="500" v-model="isActive">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" variant="dentisy">
        <img src="/images/trash-01.svg" alt="edit" width="24" height="24" />
      </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card class="flex justify-center items-center gap-4 !p-5">
        <h3 class="!text-second-color !font-semibold !text-[17px]">
          Are you sure to delete this task ?
        </h3>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="!bg-[#e73d3d] !text-light-color font-medium !text-[14px]"
            :loading="loading"
            @click="Deletetask"
          >
            Delete
          </v-btn>
          <v-btn @click="isActive.value = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";
import { ref, defineProps } from "vue";

const router = useRouter();
const store = useStore();
const toast = useToast();

const loading = ref<boolean>(false);
const isActive = ref<boolean>(false);

const props = defineProps<{
  taskID: number; 
}>();

const Deletetask = async () => {
  loading.value = true; 
  try {
    const SelecttaskID = props.taskID; 
    await store.dispatch("tasks/Deletetask", SelecttaskID);
    toast.success("Deleted successfully");
    isActive.value = false; 
  } catch (err) {
    toast.error("Error");
  } finally {
    loading.value = false; 
    isActive.value = false; 
  }
};
</script>


<style lang="scss" scoped></style>
