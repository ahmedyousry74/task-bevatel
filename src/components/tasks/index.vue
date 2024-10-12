<template>
  <section
    class="tasks__layout py-[30px] lg:px-[40px] w-full flex justify-start items-start flex-col gap-10"
  >
    <div
      class="pb-5 border-b border-solid border-[#ccc] w-full flex justify-between items-center flex-row flex-wrap gap-3"
    >
      <h3 class="text-second-color font-semibold text-[20px]">tasks</h3>
      <router-link
        to="/tasks/add"
        class="flex justify-center items-center flex-row gap-2 bg-primary-color py-[12px] px-[25px] rounded-[8px]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="text-light-color text-[15px] font-medium"> Add Task </span>
      </router-link>
    </div>
    <filtertask />
    <div class="bg-[#fff] shadow-md p-5 rounded-[8px] w-full">
      <v-data-table-server
        :headers="headers"
        :items="gettasks"
        hide-default-footer
      >
        <template v-slot:item.status="{ item }">
          <v-chip class="ma-2" color="#f694a2" v-if="item.status == 'todo'">
            <v-icon class="!text-xs mx-1 text-[#E02D3C]"> mdi-circle </v-icon>
            <span class="text-[#E02D3C] !font-medium">
              {{ item.status }}
            </span>
          </v-chip>
          <v-chip
            class="ma-2 text-white !bg-[#FDECEC]"
            v-if="item.status == 'done'"
          >
            <v-icon class="!text-xs mx-1 text-[#027A48]"> mdi-circle </v-icon>
            <span class="text-[#027A48] font-medium">
              {{ item.status }}
            </span>
          </v-chip>
          <v-chip
            class="ma-2 text-white !bg-[#FDECEC]"
            v-if="item.status == 'inProgress'"
          >
            <v-icon class="!text-xs mx-1 text-[#027A48]"> mdi-circle </v-icon>
            <span class="text-[#027A48] font-medium">
              {{ item.status }}
            </span>
          </v-chip>
        </template>
        <template v-slot:item.done_check="{ item }">
          <v-checkbox :model-value="item.status === 'done'" @change="updateTaskStatus(item)"></v-checkbox>
        </template>
        <template v-slot:item.action="{ item }">
          <div
            class="flex justify-center items-center flex-row flex-wrap gap-3"
          >
            <router-link
              :to="{
                name: 'edittask',
                params: { id: item.id },
              }"
            >
              <img
                src="/images/pencil-line.svg"
                alt="edit"
                width="24"
                height="24"
              />
            </router-link>
            <deletetask :taskID="item.id" />
          </div>
        </template>
      </v-data-table-server>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import deletetask from "./delete.vue";
import filtertask from "./filter.vue";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "todo" | "done" | "inProgress";
}

interface TaskState {
  tasks: Task[];
  loading: boolean;
}

const store = useStore();

const headers = ref([
  { title: "ID", align: "start", sortable: false, key: "id" },
  { title: "Title", key: "title", align: "start" },
  { title: "Description", key: "description", align: "start" },
  { title: "Status", key: "status", align: "start" },
  { title: "Done task", key: "done_check", align: "start" },
  { title: "Actions", key: "action", align: "start" },
]);

const gettasks = computed<Task[]>(() => store.getters["tasks/gettasks"]);

const updateTaskStatus = async (item: Task) => {
  const newStatus = item.status === 'done' ? 'todo' : 'done'; 
  const payload = { ...item, status: newStatus }; 
  
  await store.dispatch('tasks/edittask', { taskID: item.id, payload });
  
  store.dispatch('tasks/handleGettasks'); 
}

store.dispatch("tasks/handleGettasks");
</script>

<style lang="scss" scoped></style>
