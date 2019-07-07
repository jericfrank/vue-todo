<template>
  <div id="app">
    <Header />
    <div class="content-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from './components/layout/Header';

  export default {
    components: {
      Header
    },
  }
</script>

<style>
  .content-wrapper {
    margin: 10px;
  }
</style>
