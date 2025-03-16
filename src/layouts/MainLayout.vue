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


  <v-app>
    <!-- Barra superior -->
    <v-app-bar app color="primary" dark>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-app-bar-title>Dashboard - Spa de Belleza</v-app-bar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Menú lateral (sidebar desplegable) -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item title="Inicio" prepend-icon="mdi-home" />
        <v-list-item title="Servicios" prepend-icon="mdi-spa" />
        <v-list-item title="Turnos" prepend-icon="mdi-calendar" />
        <v-list-item title="Historial de Clientes" prepend-icon="mdi-account-group" />
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="pa-4" color="blue lighten-4">
              <v-card-title class="text-center font-weight-bold">Clientes Registrados</v-card-title>
              <v-card-subtitle class="text-center text-h6 font-weight-bold">150</v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="pa-4" color="green lighten-4">
              <v-card-title class="text-center font-weight-bold">Turnos Agendados</v-card-title>
              <v-card-subtitle class="text-center text-h6 font-weight-bold">45</v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="pa-4" color="pink lighten-4">
              <v-card-title class="text-center font-weight-bold">Servicios Disponibles</v-card-title>
              <v-card-subtitle class="text-center text-h6 font-weight-bold">12</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app>
      © {{ new Date().getFullYear() }} Spa de Belleza
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import Header from '@/components/HeaderLogo.vue'
import NavBar from '@/components/NavBar.vue'

import { ref } from 'vue'
const drawer = ref(false) // Controla el estado del sidebar
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
