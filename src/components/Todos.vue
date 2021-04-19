<template>
  <div>
    <!-- 新增 -->
    <input
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="来了来了"
      autocomplete="off"
    />

    <!-- todo的列表 -->
    <ul>
      <!-- :class="todo.completed?'completed':''" -->
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="{ completed: todo.completed, editing: todo === editedTodo }"
      >
        <div class="view">
          <input type="checkbox" v-model="todo.completed" />
          <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
          <button @click="removeTodo(todo)">X</button>
        </div>

        <!-- 编辑代办 -->
        <input
          type="text"
          class="edit"
          v-model="todo.title"
          v-todo-focus="todo === editedTodo"
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
          @keyup.escape="canceEdit(todo)"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  
  setup() {
    const state = reactive({
      newTodo: "",
      todos: [],
      beforeEditCache: '',
      editedTodo: false,
    });

    const methods = reactive({
      addTodo() {
        state.todos.push({
          id: state.todos.length,
          title: state.newTodo,
          completed: false,
        });
        state.newTodo = "";
      },
      removeTodo(todo) {
        state.todos.splice(state.todos.indexOf(todo), 1);
      },
      editTodo(todo) {
        state.beforeEditCache = todo.title
        state.editedTodo = todo
      },
      canceEdit(todo){
        todo.title = state.beforeEditCache
        state.editedTodo = false
      },
      doneEdit(todo){
        state.editedTodo = false
      }
    });

    return {
      ...toRefs(methods),
      ...toRefs(state),
    };
  },
  directives: {
    'todo-focus': (el, {value} )=>{
      if(value){
        el.focus()
      }
    }
  }
};
</script>
<style>
.completed {
  text-decoration: line-through;
}

.edit,
.editing .view{
  display: none;
}

.view,
.editing .edit {
  display: block;
}
</style>
