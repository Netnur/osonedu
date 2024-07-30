<template>
    <div class="container">
         <nav-menu :menuItems="jsMenu"></nav-menu>
         
    </div>
 </template>
 
 <script>
 import NavMenu from '../ui/NavMenu.vue';
 export default {
     data(){
         return {
            jsMenu: ['Salom', 'JS Item 1', 'JS Item 2', 'JS Item 3', 'JS Item 2', 'JS Item 3', 'JS Item 2', 'JS Item 3', 'JS Item 2', 'JS Item 3', 'JS Item 2', 'JS Item 3', 'JS Item 2', 'JS Item 3', 'JS Item 2', 'JS Item 3', 'JS Item 2', 'JS Item 3', 'JS Item 2', 'JS Item 3', 'JS Item 2', 'JS Item 3', 'JS Item 2', 'JS Item 3'],
         };
     },
     components:{
         NavMenu
     }
 }
 </script>
 
 <style>
 
 </style>