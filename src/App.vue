<template>
  <main class="relative antialiased bg-gray-900 w-screen min-h-screen flex justify-center items-center overflow-hidden">
    <div class="container flex justify-center">
      <Quotes />
    </div>
  <div class="absolute -top-10 right-20 h-16 w-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
  <div class="absolute top-28 left-16 h-10 w-10 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full"></div>
  <div class="absolute top-32 -right-16 h-32 w-32 bg-gradient-to-b from-sky-800 to-sky-600 rounded-full"></div>
  <div class="absolute bottom-48 -right-2 h-12 w-12 bg-gradient-to-t from-rose-700 to-rose-500 rounded-full"></div>
  <div class="absolute bottom-10 -left-10 h-28 w-28 bg-gradient-to-b from-gray-800 to-gray-700 rounded-full"></div>
  <div class="absolute bottom-12 right-20 h-8 w-8 bg-gradient-to-tr from-indigo-400 to-indigo-800 rounded-full"></div>
  </main>
</template>

<script>
  import Quotes from './components/Quotes.vue'
  
  export default {
    name : 'App',
    components : {
      Quotes
    }
  }
</script>