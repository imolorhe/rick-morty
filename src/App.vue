<template>
  <div id="app" class="bg-gray-100">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'App',
  components: {
    Header,
  },
  mounted() {
    this.getNotes();
  },
  methods: {
    ...mapActions(['getNotes']),
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
