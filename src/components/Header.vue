<template>
  <header
    class="flex justify-between items-start w-full border-b-2 border-primary-lighter relative"
  >
    <button @click="showMenu(true)"><Icon icon="ant-design:menu-outlined" /></button>
    <nav class="absolute w-full h-screen text-xl bg-background-darker left-0 menuMobile" :class="activeClass">
      <div class="w-full text-right">
        <button @click="showMenu(false)"><Icon icon="ant-design:close-square-outlined" /></button>
      </div>
      <ul class="w-full flex flex-col justify-center items-center space-y-6 pt-9 text-2xl">
        <li><RouterLink @click="showMenu(false)" to="/">Home</RouterLink></li>
        <li><RouterLink @click="showMenu(false)" to="/experiences">Experiencies</RouterLink></li>
        <li><RouterLink @click="showMenu(false)" to="/studies">Studies</RouterLink></li>
        <li><RouterLink @click="showMenu(false)" to="/training">Training</RouterLink></li>
        <li><RouterLink @click="showMenu(false)" to="/briefcase">Briefcase</RouterLink></li>
        <li><RouterLink @click="showMenu(false)" to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
    <div class="secondary-menu">
      <button><Icon icon="ant-design:user-outlined"></Icon></button>
      <button class="text-red ml-1"><Icon icon="ant-design:file-pdf-outlined"></Icon></button>
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
</style>
