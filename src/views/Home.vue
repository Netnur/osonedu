<template>
  <div class="container d-flex row justify-content-center text-center">
    <div class="row align-items-center col-4">
      <div class="col align-self-center row">
        <router-link to="/html" type="button" class="button col btn border border-dark btn-light bounce">GET STARTED</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.container {
  height: 90vh;
}

.button{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  animation: bounce 12s infinite; 
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-130px);
  }
  60% {
    transform: translateY(-125px);
  }
}
</style>
