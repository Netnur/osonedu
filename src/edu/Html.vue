<template>
   <div class="container">
        <nav-menu :menuItems="htmlMenu"></nav-menu>
        
   </div>
</template>

<script>
import NavMenu from '../ui/NavMenu.vue';
export default {
    data(){
        return {
            htmlMenu: [ 'HTML Item 1','HTML Item 2', 'HTML Item 3'],
        };
    },
    components:{
        NavMenu
    }
}
</script>

<style>

</style>