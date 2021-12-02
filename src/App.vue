<template>
  <main class="antialiased bg-gray-900 min-h-screen flex justify-center items-center">
    <div class="container flex justify-center">
      <Quotes />
    </div>
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