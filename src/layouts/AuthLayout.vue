<template>
  <div class="auth-layout">
    First Layout
    <Header />
    <NavBar />
    <main class="auth-content">
      <RouterView />
    </main>
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
        <v-list-item title="Inicio" />
        <v-list-item title="Servicios" />
        <v-list-item title="Turnos" />
        <v-list-item title="Historial de Clientes" />
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="pa-4" color="blue lighten-4">
              <v-card-title>Clientes Registrados</v-card-title>
              <v-card-subtitle>150</v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="pa-4" color="green lighten-4">
              <v-card-title>Turnos Agendados</v-card-title>
              <v-card-subtitle>45</v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="pa-4" color="pink lighten-4">
              <v-card-title>Servicios Disponibles</v-card-title>
              <v-card-subtitle>12</v-card-subtitle>
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
import { ref } from 'vue'

const drawer = ref(false) // Controla el estado del sidebar
import Header from '@/components/HeaderLogo.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
v-card-title {
  font-weight: bold;
  text-align: center;
}
.v-card-subtitle {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}


.auth-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgb(198, 192, 255);
  border-radius: 15px;
}

.auth-layout > * {
  padding: 10px 20px;
}

main.auth-content {
  flex-grow: 1;
  background: #9367f3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
}
</style>
