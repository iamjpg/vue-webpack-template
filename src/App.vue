<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="card padding-15">
            <first-component></first-component>
            <second-component></second-component>
            <third-component></third-component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FirstComponent from './components/FirstComponent';
  import SecondComponent from './components/SecondComponent';
  import ThirdComponent from './components/ThirdComponent';

  export default {
    name: 'app',
    components: {
      FirstComponent,
      SecondComponent,
      ThirdComponent
    }
  }
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.padding-15 {
  padding: 15px;
}
</style>
