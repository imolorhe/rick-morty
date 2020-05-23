<template>
  <div
    class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
  >
    <div class="flex-1 flex justify-between sm:hidden">
      <a
        href="#"
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
      >
        Previous
      </a>
      <a
        href="#"
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
      >
        Next
      </a>
    </div>
    <div
      class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
    >
      <div>
        <p class="text-sm leading-5 text-gray-700">
          Showing
          <span class="font-medium" data-tid="showing_from">
            {{ showingFrom }}
          </span>
          to
          <span class="font-medium" data-tid="showing_to">
            {{ showingTo }}
          </span>
          of
          <span class="font-medium" data-tid="total_count">
            {{ itemCount }}
          </span>
          results
        </p>
      </div>
      <div>
        <nav class="relative z-0 inline-flex shadow-sm">
          <button
            type="button"
            :class="previousButtonClasses"
            data-tid="previous"
            aria-label="Previous"
            :disabled="!previousPage"
            @click="goto(previousPage)"
          >
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            type="button"
            :class="nextButtonClasses"
            data-tid="next"
            aria-label="Next"
            :disabled="!nextPage"
            @click="goto(nextPage)"
          >
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Pagination',
  props: {
    itemsPerPage: {
      type: Number,
      default: 1,
    },
    page: {
      type: Number,
      default: 1,
    },
    itemCount: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    showingFrom(): number {
      return (this.page - 1) * this.itemsPerPage + 1;
    },
    showingTo(): number {
      return this.page * this.itemsPerPage;
    },
    pageCount(): number {
      return Math.ceil(this.itemCount / this.itemsPerPage);
    },
    previousPage(): number | null {
      if (this.page > 1) {
        return this.page - 1;
      }
      return null;
    },
    nextPage(): number | null {
      if (this.pageCount >= this.page + 1) {
        return this.page + 1;
      }

      return null;
    },
    previousButtonClasses(): unknown {
      return {
        relative: true,
        'inline-flex': true,
        'items-center': true,
        'px-2': true,
        'py-2': true,
        'rounded-l-md': true,
        border: true,
        'border-gray-300': true,
        'bg-white': true,
        'text-sm': true,
        'leading-5': true,
        'font-medium': true,
        'text-gray-500': true,
        'hover:text-gray-400': !!this.previousPage,
        'focus:z-10': true,
        'focus:outline-none': true,
        'focus:border-blue-300': true,
        'focus:shadow-outline-blue': true,
        'active:bg-gray-100': true,
        'active:text-gray-500': true,
        transition: true,
        'ease-in-out': true,
        'duration-150': true,
        'opacity-50': !this.previousPage,
        'cursor-default': !this.previousPage,
      };
    },
    nextButtonClasses(): unknown {
      return {
        '-ml-px': true,
        relative: true,
        'inline-flex': true,
        'items-center': true,
        'px-2': true,
        'py-2': true,
        'rounded-r-md': true,
        border: true,
        'border-gray-300': true,
        'bg-white': true,
        'text-sm': true,
        'leading-5': true,
        'font-medium': true,
        'text-gray-500': true,
        'hover:text-gray-400': true,
        'focus:z-10': true,
        'focus:outline-none': true,
        'focus:border-blue-300': true,
        'focus:shadow-outline-blue': true,
        'active:bg-gray-100': true,
        'active:text-gray-500': true,
        transition: true,
        'ease-in-out': true,
        'duration-150': true,
        'opacity-50': !this.nextPage,
        'cursor-default': !this.nextPage,
      };
    },
  },
  methods: {
    goto(page: number) {
      this.$emit('go-to', page);
    },
  },
});
</script>
