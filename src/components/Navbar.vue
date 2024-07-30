<template>
  <nav class="w-100 navbar position-sticky top-10 start-0 navbar-expand-lg" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">OSONWEB</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
          <li class="nav-item">
            <router-link class="nav-link" to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/html">HTML</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/css">CSS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bootstrap">BOOTSTRAP</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/js">JAVASCRIPT</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/roadmap">ROADMAP</router-link>
          </li>
        
        </ul>
        <form class="d-flex" role="search" id="form">
          <div class="input-wrapper">
            <input class="form-control" :class="{ 'expanded': isSearchExpanded }" v-model="searchQuery" type="text" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-secondary clear-btn" type="button" v-if="searchQuery" @click="clearSearch"><i class="fa-solid fa-times"></i></button>
          </div>
          <button class="btn btn-outline-success" type="button" @click="handleSearch"><i class="fa-solid fa-search"></i></button>
        </form>
        <div class="d-flex ms-3">
          <button class="btn btn-outline-light me-2" @click="toggleTheme"><i class="fa-solid fa-circle-half-stroke"></i></button>
          <button class="btn btn-outline-light me-2" @click="showSignIn">Sign In</button>
          <button class="btn btn-outline-light" @click="showLogIn">Log In</button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="searchModalLabel">Search Result</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>You searched for: {{ searchQuery }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isSearchExpanded: false,
      searchQuery: ''
    };
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
        searchModal.show();
      }else{
        this.isSearchExpanded = true;

      }
    },
    clearSearch() {
      this.searchQuery = '';
    },
    toggleTheme() {
    },
    showSignIn() {
    },
    showLogIn() {
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #023e5d;
  color: #fff;
}
#form {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 111;
}
.input-wrapper {
  position: relative;
  width: 100%;
}
#form input {
  transition: block 0.3s ease;
  display: none;
  background: none;
  border: 1px solid;
  padding-right: 30px; /* Ensure there's space for the delete icon */
}
#form input.expanded {
  width: 200px;
  display: block;
  background: #02628A;
  color: #fff;
}
.clear-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
}
#form button {
  background: none;
  border: none;
  color: #fff;
}

</style>
