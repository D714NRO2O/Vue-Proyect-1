<template>
  <div class="layout-container">
    <Header />
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
    <footer class="app-footer">
      © 2025 - Lingüi App
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/HeaderLogo.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;
}

main {
  flex: 1;  /* Ocupa todo el espacio restante */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.main-content {
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
}

.app-footer {
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: white;
  font-size: 0.875rem;
}
</style>
