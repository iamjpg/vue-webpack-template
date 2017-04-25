<template>
  <div id="app">
    <first-component></first-component>
    <second-component></second-component>
  </div>
</template>

<script>
  import FirstComponent from './components/FirstComponent';
  import SecondComponent from './components/SecondComponent';

  export default {
    name: 'app',
    components: {
      FirstComponent,
      SecondComponent
    }
  }
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
