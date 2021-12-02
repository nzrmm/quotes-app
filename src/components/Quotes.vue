<template>
  <div class="w-12/12 lg:w-6/12" @click="getQuotes">
    <div class="flex flex-wrap space-x-2 justify-center lg:justify-start">
      <span v-for="tag in tags" :key="tag" class="px-4 py-1 mb-2 bg-teal-500 text-white rounded-lg">
        {{ tag }}
      </span>
    </div>
    <h1 class="pt-4 pb-10 text-4xl text-white text-center lg:text-left font-semibold leading-snug">{{ content }}</h1>
    <div class="flex justify-center lg:justify-end">
      <a :href="`https://en.wikipedia.org/wiki/${author}`" class="mb-6 text-white/60">**{{ author }}</a>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Quotes',
    computed: mapState({
      tags : state => state.quotes.tags,
      content : state => state.quotes.content,
      author : state => state.quotes.author
    }),
    methods: {
      getQuotes() {
        this.$store.dispatch('getQuotes')
      }
    },
    mounted() {
      return this.$store.dispatch('getQuotes')
    },
  }
</script>