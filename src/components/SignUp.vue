<script setup lang="ts"></script>

<template>
  <div class="form-container">
    <label for="email">Email</label>
    <input type="email" id="email" />

    <label for="username">Username</label>
    <input type="text" id="username" />

    <label for="name">First Name</label>
    <input type="text" id="name" />

    <label for="lastname">Last Name</label>
    <input type="text" id="lastname" />

    <label for="phonenumber">Phone Number</label>
    <input type="tel" id="phonenumber" />

    <label for="password">Password</label>
    <input type="password" id="password" />

    <label for="confirmPassword">Confirm Password</label>
    <input type="password" id="confirmPassword" />

    <button>Register</button>
  </div>
</template>

<style scoped>
.form-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px; /* Reducir el espacio entre elementos */
  width: 100%;
  max-width: 400px;
  padding: 12px; /* Ligeramente menos padding */
  border-radius: 8px;
  background: #8360c3;
  background: -webkit-linear-gradient(to right, #2ebf91, #8360c3);
  background: linear-gradient(to right, #2ebf91, #8360c3);
  max-height: 90vh;
  overflow-y: auto;
}

label {
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: rgb(5, 5, 109);
}

input {
  height: 1.4rem; /* Reducir la altura de los campos de entrada */
  font-size: 0.9rem;
  border-radius: 5px;
  border: 1px solid rgba(210, 176, 249, 0.878);
  background-color: rgba(210, 176, 249, 0.878);
}

button {
  grid-column: span 2;
  margin-top: 10px;
  height: 2rem; /* Reducir la altura del botón */
  border: 1px solid #5e00bb;
  border-radius: 15px;
  font-size: 1rem;
  width: 100%;
  background: #5e00bb;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #46008a;
  border-color: #46008a;
}
</style>
