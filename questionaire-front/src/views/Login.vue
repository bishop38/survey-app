<template>
  <div class="login-page">
    <h2>Login</h2>
    <LoginForm @login-success="onLoginSuccess" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';

const router = useRouter();

function onLoginSuccess() {
  router.push('/dashboard');
}
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>