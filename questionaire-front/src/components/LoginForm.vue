<template>
  <form @submit.prevent="onSubmit">
    <input v-model="email" placeholder="Email" required />
    <input type="password" v-model="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import {useUserStore} from "@/stores/index.js";

const email = ref('');
const password = ref('');
const userStore = useUserStore();


function onSubmit() {
  userStore.login({ email: email.value, password: password.value });
}
</script>