<template>
  <div class="register-page">
    <h2>Register</h2>
    <form @submit.prevent="onRegister">
      <input v-model="username" placeholder="Username" required />
      <input v-model="email" placeholder="Email" required type="email" />
      <input v-model="password" placeholder="Password" required type="password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import authService from '../services/authService';

const router = useRouter();
const username = ref('');
const email = ref('');
const password = ref('');

async function onRegister() {
  await authService.register({ username: username.value, email: email.value, password: password.value });
  await router.push('/login'); // Перенаправление на страницу входа после регистрации
}
</script>

<style scoped>
.register-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>