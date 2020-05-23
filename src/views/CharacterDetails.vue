<template>
  <div>
    <div v-if="character">
      <div class="max-w-sm w-full lg:max-w-full lg:flex mb-6">
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
            >
              {{ character.species }}
            </span>
          </div>
        </div>
      </div>
      <div class="note-form">
        <form class="mb-6" @submit.prevent="submitNote">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="note"
          >
            Your Note
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="note"
            v-model="noteModel"
            placeholder="What's on your mind?"
          />
          <button
            type="submit"
            class="modal-close px-4 bg-purple-600 py-2 rounded-full text-white hover:bg-purple-500 transition duration-300"
          >
            Add note
          </button>
        </form>
      </div>
      <div class="note-list">
        <div
          v-for="note in characterNotes"
          :key="note.id"
          class="note-item mb-4"
        >
          <p class="text-gray-700 text-base">{{ note.note }}</p>
          <p class="text-sm text-gray-600">Aug 18</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
export default Vue.extend({
  name: 'CharacterDetails',
  props: {
    characterId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      noteModel: '',
    };
  },
  computed: {
    ...mapGetters(['getCharacterById', 'getCharacterNotes']),
    character(): unknown {
      return this.getCharacterById(this.characterId);
    },
    characterNotes(): unknown {
      return this.getCharacterNotes(Number(this.characterId));
    },
  },
  mounted() {
    // TODO: If character not found, fetch character by id
  },
  methods: {
    ...mapActions(['addNote']),
    submitNote() {
      this.addNote({
        characterId: this.characterId,
        note: this.noteModel,
      }).then(() => {
        this.noteModel = '';
      });
    },
  },
});
</script>
