<template>
  <div>
    <h1>Todos:</h1>
    <ul v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem
        v-bind:todo="todo"
        v-on:toogleRemove="$emit('toogleRemove', todo.id)"
        v-on:updateTodo="$emit('updateTodo', todo)"
      />
    </ul>
  </div>
</template>

<script>
  import TodoItem from './TodoItem';

  export default {
    name: 'Todos',
    components: {
      TodoItem
    },
    props: ['todos']
  }
</script>

<style scoped>
</style>
