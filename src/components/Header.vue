<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-purple-900 p-6"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img
        svg-inline
        class="logo fill-current w-10 h-10 mr-4"
        src="../assets/rick.svg"
        alt="rick"
      />
      <span class="font-semibold text-xl tracking-tight">
        Rick's Place
      </span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-md lg:flex-grow">
        <router-link
          class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 rounded-full lg:hover:bg-purple-800 lg:px-3 py-1 hover:text-white mr-4 transition duration-300"
          to="/"
        >
          Home
        </router-link>
        <router-link
          class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 rounded-full lg:hover:bg-purple-800 lg:px-3 py-1 hover:text-white mr-4 transition duration-300"
          to="/about"
        >
          About
        </router-link>
        <router-link
          class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 rounded-full lg:hover:bg-purple-800 lg:px-3 py-1 hover:text-white mr-4 transition duration-300"
          to="/characters"
        >
          Characters
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Header',
});
</script>
