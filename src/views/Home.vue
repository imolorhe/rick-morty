<template>
  <div class="home flex items-center justify-center text-center">
    <div class="p-48">
      <img
        svg-inline
        class="m-auto"
        alt="Rick's Place Logo"
        src="../assets/rick.svg"
      />
      <div class="text">
        Welcome to Rick's Place. Check out the
        <router-link to="/characters">characters!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>
