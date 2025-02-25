<script setup lang="ts">
import Flags from '@/components/Flags.vue';
</script>

<template>
  <header>
    <img alt="Logo Lingüi" class="logo" src="@/assets/logoLingui.png" width="280" height="125" />
    <Flags />
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
