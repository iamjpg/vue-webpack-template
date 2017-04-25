<template>
  <section>
    <h4>Component Three</h4>
    <p id="keyup-output"></p>
  </section>
</template>

<script>
  import Store from '../data/store';
  export default {
    data() {
      return Store
    },
    watch: {
      'message': function() {
        let el = document.querySelector('#keyup-output');
        el.innerHTML += 'Message has changed.<br />'
      }
    }
  }
</script>

<style scoped>
  input {
    padding: 10px;
    width: 400px;
  }
</style>
