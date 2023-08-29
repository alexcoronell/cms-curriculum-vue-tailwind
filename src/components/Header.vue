<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/experiences">Experiencies</RouterLink>
      <RouterLink to="/studies">Studies</RouterLink>
      <RouterLink to="/training">Training</RouterLink>
      <RouterLink to="/briefcase">Briefcase</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
