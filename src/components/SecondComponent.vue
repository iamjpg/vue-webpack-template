<template>
  <section>
    <h4>Component Two</h4>
    <p>This input, in the second component, will update the store model thus changing the value in component one.</p>
    <p>
      <input name="message" v-model="message">
    </p>
  </section>
</template>

<script>
  import Store from '../data/store';
  export default {
    data() {
      return Store
    }
  }
</script>

<style scoped>

</style>
