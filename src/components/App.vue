<!--****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************-->
<template>
  <div>
    <nav id="bar">
      <ul>
        <router-link to="/" tag="li">home</router-link>
        <router-link to="/hi" tag="li">Hi</router-link>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
  import List from "$/List.vue";

  export default {
    name: "App",
    components: {},
    data() {
      return {}
    },
    methods: {}
  };
  console.clear();
</script>

<style scoped>
#bar {
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px;
  background-color: #DBDBDB;
  width: 100%;
}
#bar > ul {
  padding: 0px 30px;
  margin: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
}
#bar > ul li.router-link-exact-active {
  color: #148BFF;
}
</style>
