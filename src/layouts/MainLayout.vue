<template>
  <v-app>
    <!-- Barra superior -->
    <v-app-bar app color="primary" dark>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-app-bar-title>Dashboard - Lingüi Academy</v-app-bar-title>

      <v-spacer />

      <!-- Menú desplegable de usuario -->
      <v-menu offset-y>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="goToProfile">
            <v-list-item-title>✏️ Editar Perfil</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goToSettings">
            <v-list-item-title>⚙️ Configuración</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goToSupport">
            <v-list-item-title>🛠️ Soporte</v-list-item-title>
          </v-list-item>

          <v-divider />

          <v-list-item @click="logout">
            <v-list-item-title>🚪 Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Menú lateral -->
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
        <div class="layout-container">
          <Header />
          <NavBar />
          <main class="main-content">
            <RouterView />
          </main>
        </div>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app> © {{ new Date().getFullYear() }} Lingüi Academy </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import Header from '@/components/HeaderLogo.vue'
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const drawer = ref(false) // Estado del sidebar
const router = useRouter() // Para redirecciones

const goToProfile = () => {
  router.push('/profile') // Redirigir a Editar Perfil
}

const goToSettings = () => {
  router.push('/main/settings') // Redirigir a Configuración
}

const goToSupport = () => {
  router.push('/main/support') // Redirigir a Soporte
}

const logout = () => {
  alert('Sesión cerrada') // Aquí puedes limpiar la sesión y redirigir
}
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding-top: 64px;
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;
}

.main-content {
  height: 60vh;
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
}
</style>

