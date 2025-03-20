<template>
  <div class="userView">
    <MainDashboard />
  </div>
</template>

<script setup lang="ts">
import MainDashboard from '../components/MainDashboard.vue'
</script>

<style>
@media (min-width: 1024px) {
  .userView {
    color: black;
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}
</style>
