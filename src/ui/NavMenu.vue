<template>
  <div class="container">
    <nav>
      <ul id="nav-list">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          :class="{ active: index === activeIndex }"
          @click="setActive(index)"
        >
          {{ item }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    }
  }
}
</script>

<style scoped>
nav {
  position: fixed;

  top: 10%;
  left: 0;
  width: 200px; /* Adjust width as needed */
  height: 90%; /* Adjust height as needed */
  overflow-y: auto; /* Enable vertical scroll */
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  background: #02628A;
  padding: 10px;
  color: #fff;
  cursor: pointer;
}
li.active {
  background: #013E5D;
  color: #fff;
}
li:hover {
  background: #013E5D;
  color: #fff;
}
</style>
