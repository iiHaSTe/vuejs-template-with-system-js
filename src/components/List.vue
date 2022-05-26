<!--****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************-->
<template>
  <div>
    <div class="inputs">
      <input
        v-model="value"
        type="text"
        placeholder="Enter Task Name"/>
      <button @click="add()">+</button>
    </div>
    <ul class="tasks m-3">
      <Task
        v-if="!todos.length"
        index=0
        taskName="void"/>
      <Task
        v-for="todo, i in todos"
        :key=i
        :index=i
        :taskName="todo.name"/>
    </ul>
  </div>
</template>

<script>
  import Task from "$/Task.vue";
  
  export default {
    name: "List",
    components: {
      Task
    },
    data() {
      return {
        text: "hi",
        value: "",
        todos: []
      }
    },
    methods: {
      add() {
        this.todos.push({ name:this.value });
        this.value = "";
      }
    }
  };
</script>

<style scoped>
div.inputs {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #D7D7D7;
  border-radius: 6px;
  overflow: hidden;
}
div.inputs > input {
  display: inline-block;
  color: black;
  font-weight: 600;
  outline: none;
  width: 100%;
  padding: 4px 20px;
  background-color: #eee;
  border: none;
}
div.inputs > button {
  background-color: #1168FF;
  color: white;
  font-size: 20px;
  border: none;
  height: 100%;
  width: 20%;
}
ul.tasks {
  background-color: #F1F1F1;
  padding: 10px;
  border-radius: 10px;
  list-style: none;
  max-height: 418px;
  overflow-y: scroll;
}
</style>
