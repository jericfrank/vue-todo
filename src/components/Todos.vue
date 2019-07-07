<template>
  <v-card>
    <v-subheader>Todo list vue</v-subheader>
    <v-list subheader two-line v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem
        :todo="todo"
        v-on:toogleRemove="$emit('toogleRemove', todo.id)"
        v-on:updateTodo="$emit('updateTodo', todo)"
      />
    </v-list>
  </v-card>
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
