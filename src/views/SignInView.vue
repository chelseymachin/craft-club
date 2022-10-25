<script setup>

</script>
<template>
  <authenticator
      :login-mechanisms="['email']"
      :social-providers="['google', 'facebook', 'apple']"
  >
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>