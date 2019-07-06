<template>
  <div id="app">
    <Todos v-bind:todos="todos" v-on:toogleRemove="toogleRemove" />
  </div>
</template>

<script>
import Todos from './components/Todos.vue';

export default {
  name: 'app',
  components: {
    Todos
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Learn angular',
          complete: false
        },
        {
          id: 2,
          title: 'Work react',
          complete: true
        },
        {
          id: 3,
          title: 'Master vue',
          complete: false
        }
      ]
    }
  },
  methods: {
    toogleRemove(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
