<template>
  <header class="flex justify-between">
    <div class="logo-container mb-8">
      <button @click="this.$router.push('/')"><h1>Craft Club Queue Keeper</h1></button>
    </div>
    <div class="login-container self-center mr-2">
      <button @click="this.$router.push('signIn')">Login</button>
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  width: 100%;
}
h1 {
  font-size: 3rem;
}
</style>