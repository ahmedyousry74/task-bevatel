<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar />
    <div class="flex justify-start items-start flex-col w-full wrap__content">
      <Topbar />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/layout/navbar.vue";
import Topbar from "./components/layout/top-bar.vue";
</script>

<style lang="scss">
:root {
  --primary-color: #119F49;
  --second-color: #050505;
  --grey-color: #64748b;
  --dark-color: #1D1953;
  --dark-alt-color: #334155;
  --light-color: #f1f5f9;
  --sidebar-width: 300px;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding: 20px !important;
    }
  }
  .wrap__content{
    @media (max-width: 1024px) {
      padding-inline-start: 65px;
      padding-inline-end: 5px;
    }
  }
}
</style>
