<template>
  <navbar/>
  <router-view/>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './widgets/Navbar/Navbar.vue';
export default defineComponent({
  components: {
    Navbar
  }
})

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
}
button {
  margin: 0;
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: #F2F5F8;
}
</style>
