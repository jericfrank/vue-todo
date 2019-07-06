<template>
  <form @submit="onSubmit">
    <input type="text" name="title" v-model="title" placeholder="Add todo" />
  </form>
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
