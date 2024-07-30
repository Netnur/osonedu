<template>
    <div class="container">
         <nav-menu :menuItems="cssMenu"></nav-menu>
         
    </div>
 </template>
 
 <script>
 import NavMenu from '../ui/NavMenu.vue';
 export default {
     data(){
         return {
            cssMenu: ['Salom', 'CSS Item 1', 'CSS Item 2', 'CSS Item 3','Salom', 'CSS Item 1', 'CSS Item 2', 'CSS Item 3','Salom', 'CSS Item 1', 'CSS Item 2', 'CSS Item 3', 'CSS Item 2', 'CSS Item 3','Salom', 'CSS Item 1', 'CSS Item 2', 'CSS Item 3','Salom', 'CSS Item 1', 'CSS Item 2', ],
         };
     },
     components:{
         NavMenu
     }
 }
 </script>
 
 <style>
 
 </style>