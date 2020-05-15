<template>
  <div
    class="max-w-sm w-full lg:max-w-full lg:flex shadow-md hover:shadow-xl transition duration-300 ease-in transform hover:-translate-y-px rounded cursor-pointer"
    @click="onClickCard"
  >
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      :style="`background-image: url('${character.image}')`"
      :title="character.name"
    ></div>
    <div
      class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col flex-grow justify-between leading-normal text-left"
    >
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">
          {{ character.name }}
          <div class="text-sm text-gray-600">
            {{ character.gender }} &middot;
            <span
              tid="character-card-status"
              :class="statusClasses"
              >{{ character.status }}</span
            >
            &middot; {{ character.origin.name }}
          </div>
        </div>
        <p class="text-sm text-gray-600 flex items-center">
          <img src="../assets/planet.png" class="w-5 mr-1" />
          {{ character.location.name }}
        </p>
        <div class="mb-3"></div>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{ character.species }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CharacterCard',
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  computed: {
    statusClasses(): unknown {
      return {
        'ml-1': true,
        'text-green-600': this.character.status === 'Alive',
        'text-red-600': this.character.status !== 'Alive',
      };
    },
  },
  methods: {
    onClickCard() {
      this.$emit('click', this.character);
    },
  },
});
</script>
