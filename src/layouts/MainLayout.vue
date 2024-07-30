<template>
      <Navbar />
      <div class="container mt-4">
        <router-view />
      </div>
  </template>
  
  <script>
    import Navbar from '../components/Navbar.vue';
  export default {
    name: 'MainLayout',
    components: {
      Navbar
    }
  }
  </script>
  
  <style scoped>
  /* Layout specific styles */
  </style>
  