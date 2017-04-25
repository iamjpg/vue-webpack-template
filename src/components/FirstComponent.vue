<template>
  <section>
    <h4>First Component</h4>
    <p>Data Output: <span>{{ message }}</span></p>
  </section>
</template>

<script>
  import Store from '../data/store';
  export default {
    data () {
      return Store
    },
    mounted() {
      console.log('Component Mounted!')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span {
    background-color: yellow;
  }
</style>
