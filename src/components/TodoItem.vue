<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-checkbox v-model="completed" v-on:change="toogleComplete"></v-checkbox>
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
    data () {
      return {
        completed: this.todo.completed,
      }
    },
    methods: {
      toogleComplete() {
        this.todo.completed = !this.todo.completed;
        this.$emit('updateTodo', this.todo);
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
