<template>
  <form @submit="onSubmit">
    <input type="text" name="title" v-model="title" placeholder="Add todo" />
  </form>
</template>

<script>
import uuid from 'uuid';
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
        id: uuid.v4(),
        title: this.title,
        complete: false,
      };
      this.$emit('submitTodo', newTodo);
      this.title = '';
    }
  }
}
</script>
