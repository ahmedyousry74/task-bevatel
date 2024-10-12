<template>
  <section
    class="top_bar py-[10px] px-[25px] bg-[#fff] mt-[15px] ml-[15px] !mr-[25px] rounded-[8px] shadow-lg flex justify-between items-center flex-row gap-3"
  >
    <div class="flex justify-start items-center flex-row gap-5">
      
      <div class="notification__list relative">
        <div class="w-[35px] h-[35px] rounded-full">
          <img src="/images/avatar.png" alt="avatar" width="30" height="30" @click="taskMenuClick">
        </div>
        <div
          class="notification_dd absolute top-[45px] -left-[60px] bg-[#fff] sm:w-[150px] w-[150px] h-auto rounded-[6px] shadow-2xl z-[9999] p-[15px]"
          v-if="taskMenu"
        >
          <ul
            class="notification__menu flex justify-center items-center flex-col gap-3 w-full"
          >
            <li
              class="border-b border-solid border-[#cccccc3d]  w-full text-center pb-3"
            >
              <router-link to="/profile" class="text-second-color font-medium text-[14px]"> Profile </router-link>
            </li>
            <li
              class="text-second-color font-medium text-[14px] w-full text-center"
            >
              <button  class="text-[#c62f2f] font-medium text-[14px]"> LOGOUT </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="notification__list relative">
        <div
          class="absolute -top-[10px] -right-2 bg-primary-color pb-[10px] pt-[11px] px-[10px] w-[20px] h-[20px] rounded-full flex justify-center items-center"
        >
          <span class="text-light-color text-[15px] font-medium"> 3 </span>
        </div>
        <svg
          @click="notifiMenuClick"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.7965 6.23856C14.232 5.78864 14.5 5.17562 14.5 4.5C14.5 3.11929 13.3807 2 12 2C10.6193 2 9.5 3.11929 9.5 4.5C9.5 5.17562 9.76801 5.78864 10.2035 6.23856M18 11.2C18 9.82087 17.3679 8.49823 16.2426 7.52304C15.1174 6.54786 13.5913 6 12 6C10.4087 6 8.88258 6.54786 7.75736 7.52304C6.63214 8.49823 6 9.82087 6 11.2C6 13.4818 5.43413 15.1506 4.72807 16.3447C3.92334 17.7056 3.52098 18.3861 3.53687 18.5486C3.55505 18.7346 3.58852 18.7933 3.73934 18.9036C3.87117 19 4.53351 19 5.85819 19H18.1418C19.4665 19 20.1288 19 20.2607 18.9036C20.4115 18.7933 20.445 18.7346 20.4631 18.5486C20.479 18.3861 20.0767 17.7056 19.2719 16.3447C18.5659 15.1506 18 13.4818 18 11.2Z"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div
          class="notification_dd absolute top-[40px] -left-[60px] bg-[#fff] sm:w-[350px] w-[250px] h-auto rounded-[6px] shadow-2xl z-50 p-[15px]"
          v-if="notifiMenu"
        >
          <ul
            class="notification__menu max-h-[300px] overflow-hidden overflow-y-scroll"
          >
            <li
              class="text-second-color font-medium text-[14px] p-[15px] border-b border-solid border-[#cccccc3d]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, magnam?
            </li>
            <li
              class="text-second-color font-medium text-[14px] p-[15px] border-b border-solid border-[#cccccc3d]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, magnam?
            </li>
            <li
              class="text-second-color font-medium text-[14px] p-[15px] border-b border-solid border-[#cccccc3d]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, magnam?
            </li>
            <li
              class="text-second-color font-medium text-[14px] p-[15px] border-b border-solid border-[#cccccc3d]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, magnam?
            </li>
            <li
              class="text-second-color font-medium text-[14px] p-[15px] border-b border-solid border-[#cccccc3d]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, magnam?
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lang__switch">
      <button
        class="bg-[#0000006d] w-[30px] h-[30px] rounded-full flex justify-center items-center p-5 text-light-color font-medium text-[14px]"
      >
        AR
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const notifiMenu = ref(false);
const notifiMenuClick = () => {
  notifiMenu.value = !notifiMenu.value;
  taskMenu.value = false;
};
const taskMenu = ref(false);
const taskMenuClick = () => {
  taskMenu.value = !taskMenu.value;
  notifiMenu.value = false;
};
</script>

<style lang="scss" scoped>
.notification_dd:before {
  content: "";
  position: absolute;
  top: -18px;
  left: 65px;
  border: 10px solid;
  border-color: transparent transparent #fff transparent;
}
.top_bar{
  width: calc(100% - 30px);
}
</style>
