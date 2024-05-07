<script setup>
import InputField from "./forms/InputField.vue";
import ButtonField from "./forms/ButtonField.vue";
import { ref, reactive } from "vue";

const newTodo = defineModel();
const todos = reactive([]);

function addTodo() {
  if (newTodo.value) {
    todos.push({
      text: newTodo.value,
      completed: false,
    });
    newTodo.value = '';
  }
}

function removeTodo(index) {
  this.todos.splice(index, 1);
}
</script>
<template>
  <div class="to-do-app w-5/12 text-white-color p-5">
    <h1 class="text-4xl font-bold mb-6 text-center">To-Do List</h1>
    <form @submit.prevent="addTodo">
      <input-field v-model="newTodo" input-type="text" message="Add new to-do"></input-field>
      <button-field
        button-value="Add ToDo"
        class="add-todo"
      ></button-field>
    </form>
    <div class="to-dos">
      <p class="font-bold text-2xl border-b border-gray-500 pb-3">ToDo List</p>
      <ul class="mt-5 text-lg px-4">
        <li
          v-for="(todo, index) in todos"
          :key="index"
          class="mb-4 flex justify-between border bottom-1 p-4 rounded-lg"
        >
          <div>
            <input-field
              v-model="todo.completed"
              input-type="checkbox"
            ></input-field>
            <span :class="{ 'line-through': todo.completed }">{{
              todo.text
            }}</span>
          </div>
          <button-field
            @click="removeTodo(index)"
            button-value="Delete"
            class="btn-remove"
          ></button-field>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.btn-remove {
  @apply bg-secondary px-2 rounded-lg font-bold text-black;
}

.add-todo {
  @apply w-full mb-6 bg-secondary p-3 rounded-lg text-black border border-primary font-bold text-xl;
}

</style>
