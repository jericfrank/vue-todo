<template>
  <div id="app">
    <AddTodo v-on:submitTodo="submitTodo" />
    <Todos v-bind:todos="todos" v-on:toogleRemove="toogleRemove" v-on:updateTodo="updateTodo" />
  </div>
</template>

<script>
import axios from 'axios';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

axios.defaults.baseURL = 'http://localhost:3000';

export default {
  name: 'app',
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    toogleRemove(id) {
      axios.delete(`/todos/${id}`)
      .then(() => this.todos = this.todos.filter(t => t.id !== id))
      // eslint-disable-next-line
      .catch(err => console.log(err));
    },
    submitTodo(newTodo) {
      axios.post('/todos', {...newTodo})
      .then(res => this.todos = [res.data, ...this.todos])
      // eslint-disable-next-line
      .catch(err => console.log(err));
    },
    updateTodo(updateTodo) {
      const id = updateTodo.id;
      delete updateTodo.id;
      axios.put(`/todos/${id}`, {...updateTodo})
      // eslint-disable-next-line
      .catch(err => console.log(err));
    }
  },
  created() {
    axios.get('/todos?_limit=5&_sort=id&_order=desc')
      .then(res => this.todos = res.data)
      // eslint-disable-next-line
      .catch(err => console.log(err));
  },
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
