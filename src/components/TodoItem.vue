<template>
  <li v-bind:class="{'is-complete':todo.complete}">
    <p>
      <input type="checkbox" v-bind:checked="todo.complete" v-on:change="toogleComplete" />
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
        this.todo.complete = e.target.checked;
      }
    }
  }
</script>

<style scoped>
  .is-complete {
    text-decoration: line-through;
  }
</style>
