<template>
  <div>
    <div class="p-2">
      <div class="flex flex-wrap -mx-2">
        <div
          v-for="character of characters"
          :key="character.id"
          class="w-1/2 p-4"
        >
          <CharacterCard :character="character" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CharacterCard from '@/components/CharacterCard.vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Characters',
  components: {
    CharacterCard,
  },
  computed: {
    ...mapGetters(['characters']),
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    ...mapActions(['getCharacters']),
  },
});
</script>
