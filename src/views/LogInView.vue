<template>
  <div class="log-in">
    <h1>Login to Güi</h1>
    <LogIn />
  </div>
</template>

<script setup lang="ts">
import LogIn from '@/components/LogIn.vue'
</script>

<style scoped>
.log-in {
  color: black;
  display: grid;
  place-items: center;
  height: 100%;
}
</style>
