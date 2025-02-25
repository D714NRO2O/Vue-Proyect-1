<script setup lang="ts"></script>

<template>
  <div class="dashboard">
    <header>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#stats">Statistics</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
    </header>
    <section id="overview" class="section">
      <h2>Overview</h2>
      <p>Welcome to your Dashboard. Here's an overview of your data.</p>
    </section>
    <section id="stats" class="section">
      <h2>Statistics</h2>
      <p>Some statistical data will appear here.</p>
    </section>
    <section id="settings" class="section">
      <h2>Settings</h2>
      <p>Manage your preferences here.</p>
    </section>
  </div>
</template>


<style scoped>
/* Estilos específicos para este componente */
.dashboard {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
  padding: 10px 20px;
}

header h1 {
  font-size: 24px;
  color: #333;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav ul li {
  margin-right: 15px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

section {
  margin-top: 20px;
}

.section h2 {
  color: #333;
}

.section p {
  font-size: 16px;
  color: #555;
}
</style>
