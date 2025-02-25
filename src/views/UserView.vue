<template>
  <div class="userView">
    <h1>Perfil de Usuario</h1>
    <p>Aquí puedes ver y actualizar tu información personal.</p>
    <MainDashboard />
  </div>
</template>

<script setup lang="ts">
  import MainDashboard from '../components/MainDashboard.vue';
</script>

<style>
@media (min-width: 1024px) {
  .userView {
    color: black;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
