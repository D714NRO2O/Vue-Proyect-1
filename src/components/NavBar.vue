<template>
  <nav>
    <RouterLink to="/">Log In</RouterLink>
    <RouterLink to="/reset-password">Restablecer Contraseña</RouterLink>
    <RouterLink to="sign-up">Sign Up</RouterLink>
    <RouterLink to="/user">Usuario</RouterLink>
    <RouterLink to="/support">Soporte</RouterLink>
    <RouterLink to="/settings">Configuración</RouterLink>

  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}
</style>
