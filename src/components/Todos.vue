<template>
  <v-card>
    <v-subheader>Todo list vue</v-subheader>
    <v-list subheader two-line v-bind:key="todo.id" v-for="todo in allTodos">
      <TodoItem
        :todo="todo"
        v-on:toogleRemove="removeTodo(todo.id)"
        v-on:completedTodo="updateTodo"
      />
    </v-list>
  </v-card>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import TodoItem from './TodoItem';

  export default {
    name: 'Todos',
    computed: mapGetters(['allTodos']),
    components: {
      TodoItem
    },
    methods: {
      ...mapActions(['getTodos', 'removeTodo', 'updateTodo']),
    },
    created() {
      this.getTodos();
    },
  }
</script>

<style scoped>
</style>
