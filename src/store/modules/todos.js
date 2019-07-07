import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const state  = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async getTodos({ commit }) {
    const response = await axios.get('/todos?_limit=5&_sort=id&_order=desc');
    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post('/todos', { title, completed: false });
    commit('newTodo', response.data);
  },
  async removeTodo({ commit }, id) {
    await axios.delete(`/todos/${id}`);
    commit('removeTodo', id);
  },
  async updateTodo({ commit }, updateTodo) {
    const id = updateTodo.id;
    const response = await axios.put(`/todos/${id}`, {...updateTodo});
    commit('updateTodo', response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};