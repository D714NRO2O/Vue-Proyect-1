<template>
  <div class="reset-password">
    <h1>Restablecer Contraseña</h1>
    <ResetPassword />
  </div>
</template>

<script setup lang="ts">
import ResetPassword from '@/components/ResetPassword.vue'
</script>

<style scoped>
.reset-password {
  display: grid;
  place-items: center;
  height: 100vh;
}
</style>
