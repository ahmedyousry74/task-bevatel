<template>
  <v-row>
    <v-col cols="12" md="4">
      <div
        class="border border-solid border-gray-fourth rounded-xl sm:p-[24px] p-[15px] bg-[#fff]"
      >
        <h2
          class="text-black-opacity sm:text-[18px] text-[15px] font-semibold mb-6"
        >
          Total tasks
        </h2>
        <div class="flex justify-between items-center flex-row flex-wrap">
          <h3
            class="sm:text-[20px] text-[15px] font-semibold text-black-opacity"
          >
            950
          </h3>
          <div class="flex justify-start items-end flex-col flex-wrap gap-1">
            <p
              class="text-fourth-color text-sm font-semibold flex justify-center"
            >
              <v-icon color="#119F49"> mdi-arrow-up-thin </v-icon>80%
            </p>
            <p class="text-gray text-sm font-normal">Compared to JUNE 2024</p>
          </div>
        </div>
      </div>
    </v-col>
    <v-col cols="12" md="4">
      <div
        class="border border-solid border-gray-fourth rounded-xl sm:p-[24px] p-[15px] bg-[#fff]"
      >
        <h2
          class="text-black-opacity sm:text-[18px] text-[15px] font-semibold mb-6"
        >
          Total Users
        </h2>
        <div class="flex justify-between items-center flex-row flex-wrap">
          <h3
            class="sm:text-[20px] text-[15px] font-semibold text-black-opacity"
          >
            578
          </h3>
          <div class="flex justify-start items-end flex-col flex-wrap gap-1">
            <p
              class="text-fourth-color text-sm font-semibold flex justify-center"
            >
              <v-icon color="#119F49"> mdi-arrow-up-thin </v-icon>44%
            </p>
            <p class="text-gray text-sm font-normal">Compared to JUNE 2024</p>
          </div>
        </div>
      </div>
    </v-col>
    <v-col cols="12" md="4">
      <div
        class="border border-solid border-gray-fourth rounded-xl sm:p-[24px] p-[15px] bg-[#fff]"
      >
        <h2
          class="text-black-opacity sm:text-[18px] text-[15px] font-semibold mb-6"
        >
          Total tasks
        </h2>
        <div class="flex justify-between items-center flex-row flex-wrap">
          <h3
            class="sm:text-[20px] text-[15px] font-semibold text-black-opacity"
          >
            950
          </h3>
          <div class="flex justify-start items-end flex-col flex-wrap gap-1">
            <p
              class="text-fourth-color text-sm font-semibold flex justify-center"
            >
              <v-icon color="#119F49"> mdi-arrow-up-thin </v-icon>50%
            </p>
            <p class="text-gray text-sm font-normal">Compared to JUNE 2024</p>
          </div>
        </div>
      </div>
    </v-col>
    <v-col cols="12" md="6" class="sm:mt-[32px] mt-[20px]">
      <h2 class="text-second-color font-semibold text-[16px] mb-5">
        Last 4 tasks
      </h2>
      <v-data-table-server
        :headers="lastUsers"
        :items="lastuserData"
        hide-default-footer
      >
        <template v-slot:item.status="{ item }">
          <v-chip
            class="ma-2"
            color="#f694a2"
            v-if="item.status == 'not active'"
          >
            <v-icon class="!text-xs mx-1 text-[#E02D3C]"> mdi-circle </v-icon>
            <span class="text-[#E02D3C] !font-medium">
              {{ item.status }}
            </span>
          </v-chip>
          <v-chip
            class="ma-2 text-white !bg-[#FDECEC]"
            v-if="item.status == 'active'"
          >
            <v-icon class="!text-xs mx-1 text-[#027A48]"> mdi-circle </v-icon>
            <span class="text-[#027A48] font-medium">
              {{ item.status }}
            </span>
          </v-chip>
        </template>
      </v-data-table-server>
    </v-col>
    <v-col cols="12" md="6" class="sm:mt-[32px] mt-[20px]">
      <h2 class="text-second-color font-semibold text-[16px] mb-5">
        Last 4 tasks
      </h2>
      <v-data-table-server
        :headers="lasttasks"
        :items="lasttasksData"
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
            class="ma-2 text-white !bg-[#1cff462e]"
            v-if="item.status == 'done'"
          >
            <v-icon class="!text-xs mx-1 text-[#568b67]"> mdi-circle </v-icon>
            <span class="text-[#568b67] font-medium">
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
      </v-data-table-server>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const lastUsers = ref([
  {
    title: "ID",
    align: "start",
    sortable: false,
    key: "id",
  },
  { title: "Name", key: "name", align: "start" },
  { title: "Email", key: "email", align: "start" },
  { title: "Phone", key: "phone", align: "start" },
  { title: "Status", key: "status", align: "start" },
]);

const lastuserData = ref([
  {
    id: "1",
    name: "ahmed",
    email: "ahmedyousry@gmail.com",
    phone: "01234756789",
    status: "active",
  },
  {
    name: "adel",
    email: "adel@gmail.com",
    phone: "02123456789",
    status: "not active",
    id: "3",
  },
  {
    name: "omar",
    email: "omar@gmail.com",
    phone: "01884874701",
    status: "not active",
    id: "4",
  },
  {
    id: "6",
    name: "waleed",
    email: "waleed@gmail.com",
    phone: "01234567811",
    status: "not active",
  },
]);

// tasks
const lasttasks = ref([
  {
    title: "ID",
    align: "start",
    sortable: false,
    key: "id",
  },
  { title: "Title", key: "title", align: "start" },
  { title: "Description", key: "description", align: "start" },
  { title: "Status", key: "status", align: "start" }
]);

const lasttasksData = ref([
  {
    id: "1",
    title: "task 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, molestiae.",
    status: "todo",
  },
  {
    id: "2",
    title: "task 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, molestiae.",
    status: "done",
  },
  {
    id: "3",
    title: "task 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, molestiae.",
    status: "inProgress",
  },
  {
    id: "4",
    title: "task 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, molestiae.",
    status: "todo",
  },
]);
</script>

<style lang="scss" scoped>
.apexcharts-toolbar {
  display: none !important;
}
</style>
