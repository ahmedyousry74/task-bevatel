<template>
  <aside class="shadow-xl" :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <h1 class="text-black font-medium text-[25px]">LOGO</h1>
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="icons__">
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>

    <div class="menu">
      <router-link to="/" class="router__text">
        <span class="icons__">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 10.5651C3 9.9907 3 9.70352 3.07403 9.43905C3.1396 9.20478 3.24737 8.98444 3.39203 8.78886C3.55534 8.56806 3.78202 8.39175 4.23539 8.03912L11.0177 2.764C11.369 2.49075 11.5447 2.35412 11.7387 2.3016C11.9098 2.25526 12.0902 2.25526 12.2613 2.3016C12.4553 2.35412 12.631 2.49075 12.9823 2.764L19.7646 8.03913C20.218 8.39175 20.4447 8.56806 20.608 8.78886C20.7526 8.98444 20.8604 9.20478 20.926 9.43905C21 9.70352 21 9.9907 21 10.5651V17.8C21 18.9201 21 19.4801 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4801 3 18.9201 3 17.8V10.5651Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span class="text">Home</span>
      </router-link>
      <router-link to="/tasks" class="router__text">
        <span class="icons__">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M16 3.46777C17.4817 4.20412 18.5 5.73315 18.5 7.50001C18.5 9.26687 17.4817 10.7959 16 11.5323M18 16.7664C19.5115 17.4504 20.8725 18.565 22 20"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 20C3.94649 17.5226 6.58918 16 9.5 16C12.4108 16 15.0535 17.5226 17 20M14 7.5C14 9.98528 11.9853 12 9.5 12C7.01472 12 5 9.98528 5 7.5C5 5.01472 7.01472 3 9.5 3C11.9853 3 14 5.01472 14 7.5Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span class="text">tasks</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu logout__">
      <router-link to="/settings" class="router__text">
        <span class="icons__">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M6 17.0001C6 17.3514 6 17.527 6.01567 17.6797C6.14575 18.9475 7.06261 19.9947 8.30206 20.2912C8.45134 20.3269 8.6255 20.3501 8.97368 20.3966L15.5656 21.2755C17.442 21.5257 18.3803 21.6508 19.1084 21.3612C19.7478 21.107 20.2803 20.6408 20.6168 20.0407C21 19.3572 21 18.4106 21 16.5176V7.48256C21 5.58952 21 4.643 20.6168 3.95947C20.2803 3.35936 19.7478 2.89313 19.1084 2.63892C18.3803 2.34938 17.4421 2.47448 15.5656 2.72467L8.97368 3.60359C8.62546 3.65002 8.45135 3.67324 8.30206 3.70895C7.0626 4.00544 6.14575 5.05266 6.01567 6.32043C6 6.47313 6 6.64878 6 7.00008"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 8L16 12M16 12L12 16M16 12H3"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span class="text">Logout</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: var(--second-color);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out;
  .flex {
    flex: 1 1 0%;
  }
  .logo {
    margin-bottom: 1rem;
    h1 {
      display: none;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;
      .icons__ {
        font-size: 2rem;
        color: var(--second-color);
        transition: 0.2s ease-out;
      }

      &:hover {
        .icons__ {
          color: var(--primary-color);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .router__text .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--grey-color);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .router__text {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .icons__ {
        font-size: 2rem;
        color: var(--second-color);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--second-color);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: var(--dark-alt-color);
        border-right: 5px solid var(--primary-color);
        .icons__,
        .text {
          color: var(--light-color);
        }
        svg,path{
          color: var(--light-color);
          fill: var(--light-color);
          stroke: var(--light-color);
        }
      }

      &.router-link-exact-active {
        background-color: var(--dark-alt-color);
        border-right: 5px solid var(--primary-color);

        .icons__,
        .text {
          color: var(--light-color);
        }
        svg,path{
          color: var(--light-color);
          fill: var(--light-color);
          stroke: var(--light-color);
        }
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .router__text .text {
      opacity: 1;
    }

    .router__text {
      .icons__ {
        margin-right: 1rem;
      }
    }

    .logo {
      h1 {
        display: inline-block;
      }
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
  .logout__{
    background-color: rgba(255, 0, 0, 0.181);
    &:hover{
      background-color: rgba(255, 0, 0, 0.129) !important;
    }
  }
}
</style>
