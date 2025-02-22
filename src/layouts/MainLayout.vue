<template>
  <div> Second Layout
    <Header />
    <NavBar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue';
</script>
