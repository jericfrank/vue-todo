<template>
  <v-form @submit="onSubmit">
    <v-text-field
      v-model="title"
      label="Write new todo.."
      solo
      required
    />
  </v-form>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'AddTodo',
    data() {
      return {
        title: ''
      }
    },
    methods: {
      ...mapActions(['addTodo']),
      onSubmit(e) {
        e.preventDefault();
        this.addTodo(this.title);
        this.title = '';
      }
    }
  }
</script>
