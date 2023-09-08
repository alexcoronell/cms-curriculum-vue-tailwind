<template>
    <footer class="w-full py-3 border-t-2">
        <p class="text-center">Developed by Alex Coronell - {{ currentYear }}</p>
    </footer>
</template>

<script setup>
const data = new Date()
const currentYear = data.getFullYear()
</script>