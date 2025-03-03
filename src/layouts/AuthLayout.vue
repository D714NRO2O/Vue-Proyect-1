<template>
  <div>
    First Layout
    <Header />
    <NavBar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/HeaderLogo.vue'
import NavBar from '@/components/NavBar.vue'
</script>
