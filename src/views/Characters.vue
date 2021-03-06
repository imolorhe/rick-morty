<template>
  <div>
    <div class="p-2">
      <div class="flex flex-wrap -mx-2">
        <div
          v-for="character of characterList"
          :key="character.id"
          class="w-1/2 p-4"
        >
          <CharacterCard
            :character="character"
            @click="goToCharacter"
          />
        </div>
      </div>
    </div>
    <Pagination
      :items-per-page="20"
      :page="characters.info.page"
      :item-count="characters.info.count"
      @go-to="goToPage"
    />
    <div
      class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
      :class="modalClasses"
    >
      <div
        class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        @click="onCloseModal"
      />

      <div
        class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="modal-content py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">Character Details</p>
            <div
              class="modal-close cursor-pointer z-50"
              @click="onCloseModal"
            >
              <svg
                class="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                ></path>
              </svg>
            </div>
          </div>

          <!--Body-->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CharacterCard from '@/components/CharacterCard.vue';
import Pagination from '@/components/Pagination.vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import { CharacterDataModel } from '../store/state';

export default Vue.extend({
  name: 'Characters',
  components: {
    CharacterCard,
    Pagination,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapState(['characters']),
    ...mapGetters(['characterList']),
    modalClasses(): unknown {
      return {
        'opacity-0': !this.showModal,
        'pointer-events-none': !this.showModal,
      };
    },
  },
  mounted() {
    const page = this.$route.query.page || 1;
    this.getCharacters({ page });
  },
  watch: {
    $route: {
      immediate: true,
      handler(newVal, oldVal) {
        this.showModal = newVal.meta && newVal.meta.showModal;

        if (oldVal && newVal.query.page !== oldVal.query.page) {
          this.getCharacters({ page: newVal.query.page });
        }
      },
    },
  },
  methods: {
    ...mapActions(['getCharacters']),
    goToCharacter(character: CharacterDataModel) {
      this.$router.push({
        path: `/characters/${character.id}`,
        query: this.$route.query,
      });
    },
    onCloseModal() {
      this.showModal = false;
      this.$router.push({ path: './', query: this.$route.query });
    },
    goToPage(page: number) {
      this.$router.push(`?page=${page}`);
    },
  },
});
</script>
