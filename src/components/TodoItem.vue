<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-checkbox v-model="checked" v-on:change="toogleComplete"></v-checkbox>
    </v-list-tile-action>

    <v-list-tile-content>
      <v-list-tile-title v-bind:class="{'is-complete':todo.completed}">{{todo.title}}</v-list-tile-title>
    </v-list-tile-content>

    <v-list-tile-action>
      <v-icon @click="$emit('toogleRemove', todo.id)">delete</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['todo'],
    data() {
      return {
        checked: this.todo.completed
      }
    },
    methods: {
      toogleComplete() {
        const { id, title, completed } = this.todo;
        const updTodo = {
          id,
          title,
          completed: !completed
        };
        this.$emit('completedTodo', updTodo);
      }
    }
  }
</script>

<style scoped>
  .is-complete {
    text-decoration: line-through;
    color: green;
  }
</style>
