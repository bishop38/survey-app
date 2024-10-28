<template>
  <div class="home">
    <h1>Welcome to the Survey App</h1>
    <p>Participate in surveys or create your own to gather insights.</p>
    <router-link to="/login">
      <button>Login</button>
    </router-link>
    <router-link to="/register">
      <button>Register</button>
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  text-align: center;
}
</style>