<script setup lang="ts"></script>

<template>
  <div class="form-container">
    <label for="username">Username</label>
    <input type="text" id="username" />

    <label for="password">Password</label>
    <input type="password" id="password" />

    <button>Log In</button>
  </div>
</template>

<style scoped>
.form-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 7px;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background: #8360c3;
  background: -webkit-linear-gradient(to right, #2ebf91, #8360c3);
  background: linear-gradient(to right, #2ebf91, #8360c3);
}

label {
  font-size: 1.3rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: rgb(5, 5, 109);
}

input {
  height: 1.8rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid rgba(210, 176, 249, 0.878);
  background-color: rgba(210, 176, 249, 0.878);
}

button {
  margin-top: 15px;
  height: 2.4rem;
  border: 1px solid #5e00bb;
  border-radius: 15px;
  font-size: 1rem;
  width: 10rem;
  justify-self: center;
  background: #5e00bb;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: white;
}
</style>
