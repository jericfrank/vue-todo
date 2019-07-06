<template>
  <li v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" v-bind:checked="todo.completed" v-on:change="toogleComplete" />
      {{todo.title}}
      <button @click="$emit('toogleRemove', todo.id)">remove</button>
    </p>
  </li>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {
      toogleComplete(e) {
        this.todo.completed = e.target.checked;
        this.$emit('updateTodo', this.todo);
      }
    }
  }
</script>

<style scoped>
  .is-complete {
    text-decoration: line-through;
  }
</style>
