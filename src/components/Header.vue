<template>
  <header
    class="flex justify-between items-start w-full border-b-2 border-primary-lighter relative bg-background-darker md:py-2"
  >
    <button @click="showMenu(true)" class="md:hidden"><Icon icon="ant-design:menu-outlined" /></button>
    <nav class="absolute w-full h-screen text-xl left-0 bg-background-darker menuMobile md:static md:bg-transparent md:h-auto" :class="activeClass">
      <div class="w-full text-right md:hidden">
        <button @click="showMenu(false)"><Icon icon="ant-design:close-square-outlined" /></button>
      </div>
      <ul class="w-full flex flex-col justify-center items-center space-y-6 pt-9 text-2xl md:pt-1 lg:text-xl">
        <li><RouterLink @click="showMenu(false)" class="md:p-3 md:hover:text-primary-lightest md:hover:border-b-4 md:border-primary-lightest" to="/">Home</RouterLink></li>
        <li><RouterLink @click="showMenu(false)" class="md:p-3 md:hover:text-primary-lightest md:hover:border-b-4 md:border-primary-lightest" to="/experiences">Experiencies</RouterLink></li>
        <li><RouterLink @click="showMenu(false)" class="md:p-3 md:hover:text-primary-lightest md:hover:border-b-4 md:border-primary-lightest" to="/studies">Studies</RouterLink></li>
        <li><RouterLink @click="showMenu(false)" class="md:p-3 md:hover:text-primary-lightest md:hover:border-b-4 md:border-primary-lightest" to="/training">Training</RouterLink></li>
        <li><RouterLink @click="showMenu(false)" class="md:p-3 md:hover:text-primary-lightest md:hover:border-b-4 md:border-primary-lightest" to="/briefcase">Briefcase</RouterLink></li>
        <li><RouterLink @click="showMenu(false)" class="md:p-3 md:hover:text-primary-lightest md:hover:border-b-4 md:border-primary-lightest" to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
    <div>
      <ul class="lg:w-full flex justify-center items-center text-2xl py-1 md:pt-1 lg:text-xl lg:mb-0 lg:pb-0">
        <li><a href="#" class="lg:flex lg:mb-0 lg:p-3 lg:hover:text-primary-lightest lg:hover:border-b-4 lg:border-primary-lightest"><Icon class="text-3xl inline text-red" icon="ant-design:file-pdf-outlined"></Icon><span class="hidden lg:inline text-lg text-primary-lighter lg:ml-1 lg:hover:text-primary-lightest lg:text-xl">CV</span></a></li>
        <li><RouterLink class="lg:flex lg:mb-0 lg:p-3 lg:hover:text-primary-lightest lg:hover:border-b-4 lg:border-primary-lightest" to="/login"><Icon class="text-3xl inline" icon="ant-design:user-outlined"></Icon><span class="hidden lg:inline text-lg text-primary-lighter lg:ml-1 lg:hover:text-primary-lightest lg:text-xl">Login</span></RouterLink></li>
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
button {
  @apply text-3xl p-1;
}

.hiddenMenuClass {
  left: -100%;
}

.menuMobile {
  transition: all 500ms linear !important;
}

ul {
  @apply md:flex md:flex-row md:justify-start md:items-center md:space-y-0 md:space-x-0 md:text-lg md:mx-0
}
</style>
