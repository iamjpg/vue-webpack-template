<template>
  <section>
    <h1>First Component</h1>
    <p>Data Output: <span>{{ message }}</span></p>
  </section>
</template>

<script>
  import Store from '../data/store';
  export default {
    data () {
      return Store
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span {
    background-color: yellow;
  }
</style>
