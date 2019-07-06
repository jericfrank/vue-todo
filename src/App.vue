<template>
  <div id="app">
    <AddTodo v-on:submitTodo="submitTodo" />
    <Todos v-bind:todos="todos" v-on:toogleRemove="toogleRemove" />
  </div>
</template>

<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

export default {
  name: 'app',
  components: {
    Todos,
    AddTodo
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
    },
    submitTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
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
