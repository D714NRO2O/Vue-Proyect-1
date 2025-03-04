<template>
  <div class="auth-layout">
    First Layout
    <Header />
    <NavBar />
    <main class="auth-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/HeaderLogo.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
.auth-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #745cd3;
}

.auth-layout > * {
  padding: 10px 20px;
}

main.auth-content {
  flex-grow: 1;
  background: #5d27d2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
}
</style>
