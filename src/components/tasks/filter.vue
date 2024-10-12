<template>
  <div
    class="flex justify-start items-start flex-row flex-wrap gap-3 w-full bg-[#fff] shadow-md p-5 rounded-[8px]"
  >
    <v-text-field
      hide-details
      max-width="250"
      placeholder="Search"
      variant="outlined"
      density="compact"
      v-model="filter.search"
      @input="handletasks"
    ></v-text-field>
    <v-autocomplete
      v-model="filter.status"
      class="!w-[250px]"
      density="compact"
      max-width="250"
      clearable
      chips
      label="Status"
      :items="statusMenu"
      variant="outlined"
      hide-details
      @update:model-value="handletasks"
    ></v-autocomplete>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, reactive } from "vue";
import { useStore } from "vuex";

interface Filter {
  search: string;
  status: string | null; 
}

const store = useStore();

const filter = reactive<Filter>({
  search: "",
  status: null,
});

const tasksPAYLOAD = computed(() => {
  const payload = {
    title: filter.search,
    status: filter.status,
  };

  return { ...payload };
});

const handletasks = () => {
  store.commit("tasks/setFilter", tasksPAYLOAD.value);
  store.dispatch("tasks/handleGettasks");
};

const statusMenu = ref<{ title: string; value: string }[]>([
  {
    title: "todo",
    value: "todo",
  },
  {
    title: "inProgress",
    value: "inProgress",
  },
  {
    title: "done",
    value: "done",
  },
]);
</script>


<style lang="scss" scoped></style>
