<template>
  <header>
    <button @click="showMenu(true)" class="md:hidden">
      <Icon icon="ant-design:menu-outlined" />
    </button>
    <nav :class="activeClass">
      <div class="w-full text-right md:hidden">
        <button @click="showMenu(false)"><Icon icon="ant-design:close-square-outlined" /></button>
      </div>
      <ul>
        <li>
          <RouterLink class="routerLink" @click="showMenu(false)" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink @click="showMenu(false)" class="routerLink" to="/experiences"
            >Experiencies</RouterLink
          >
        </li>
        <li>
          <RouterLink @click="showMenu(false)" class="routerLink" to="/studies">Studies</RouterLink>
        </li>
        <li>
          <RouterLink @click="showMenu(false)" class="routerLink" to="/training"
            >Training</RouterLink
          >
        </li>
        <li>
          <RouterLink @click="showMenu(false)" class="routerLink" to="/briefcase"
            >Briefcase</RouterLink
          >
        </li>
        <li>
          <RouterLink @click="showMenu(false)" class="routerLink" to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="lg:p-0 lg:pt-[0.4rem] lg:m-0">
      <ul
        class="cv-access"
      >
        <li>
          <a
            href="#"
            ><Icon class="text-3xl text-red" icon="ant-design:file-pdf-outlined"></Icon
            ><span
              >CV</span
            ></a
          >
        </li>
        <li>
          <RouterLink
            class="routerLink"
            to="/login"
            ><Icon class="text-3xl" icon="ant-design:user-outlined"></Icon
            ><span
              >Login</span
            ></RouterLink
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

const activeClass = ref('hiddenMenuClass')

const showMenu = (condition) => {
  if (condition) {
    activeClass.value = ''
  } else {
    activeClass.value = 'hiddenMenuClass'
  }
}
</script>

<style scoped>
header {
  @apply flex justify-between items-start w-full border-b-2 border-primary-lighter relative bg-background-darker md:pt-3 md:pb-0 md:h-[63px];
}

header > nav {
  @apply absolute w-full h-screen text-xl left-0 bg-background-darker menuMobile md:static md:bg-transparent md:h-auto;
}

header > nav > ul {
  @apply w-full flex flex-col justify-center items-center space-y-6 pt-9 text-2xl md:flex md:flex-row md:justify-start md:items-center md:space-y-0 md:space-x-0 md:text-lg md:mx-0 md:pt-1 lg:text-xl;
}

header > nav > ul > li > .routerLink {
  @apply md:p-3 md:hover:text-primary-lightest md:hover:border-b-4 md:border-primary-lightest md:py-5;
}

.cv-access {
  @apply lg:w-full flex justify-center items-center text-2xl py-1 md:pt-1 lg:text-xl lg:h-[32px];
}

.cv-access> li > a, .cv-access> li > .routerLink {
  @apply lg:flex lg:mb-0 lg:p-3 lg:hover:text-primary-lightest lg:hover:border-b-4 lg:border-primary-lightest lg:h-[63px];
}

.cv-access > li > a > span {
  @apply hidden lg:inline text-lg text-primary-lighter lg:ml-1 lg:hover:text-primary-lightest lg:text-xl;
}

button {
  @apply text-3xl p-1;
}

.hiddenMenuClass {
  left: -100%;
}

.menuMobile {
  transition: all 500ms linear !important;
}
</style>
