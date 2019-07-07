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
export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        complete: false,
      };
      this.$emit('submitTodo', newTodo);
      this.title = '';
    }
  }
}
</script>
