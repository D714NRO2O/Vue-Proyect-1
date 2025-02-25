<script setup lang="ts">
  import Inglaterra from '@/assets/inglaterra.png'
  import Francia from '@/assets/francia.png'
  import Italia from '@/assets/italia.png'
  import Alemania from '@/assets/alemania.png'
  import Brazil from '@/assets/brazil.png'
</script>

<template>
  <div class="flags">
    <Inglaterra />
    <Francia />
    <Italia />
    <Alemania />
    <Brazil />
  </div>
</template>

<style scoped>
  .flags {
    background-color: aqua;
    display: flex;
    justify-content: space-evenly;
    width: 280;
    height: 60;
  }

  .flags > * {
    height: 30px;
    width: 30px;
  }
</style>
