<template>
  <div>
    <div v-if="character">
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          class="h-32 lg:h-auto lg:w-32 flex-none bg-cover bg-center rounded text-center overflow-hidden"
          :style="`background-image: url('${character.image}')`"
          :title="character.name"
        ></div>
        <div
          class="bg-white rounded-b lg:rounded-b-none lg:rounded-r px-4 flex flex-col flex-grow justify-between leading-normal text-left"
        >
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-2xl mb-2">
              <span class="leading-none">
                {{ character.name }}
              </span>
              <div class="text-sm text-gray-600">
                {{ character.gender }} &middot;
                <span>
                  {{ character.status }}
                </span>
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
  name: 'CharacterDetails',
  props: {
    characterId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getCharacterById']),
    character() {
      return this.getCharacterById(this.characterId);
    },
  },
});
</script>
