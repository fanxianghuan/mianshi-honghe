<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
html,body{
  margin: 0;
  height: 100%;
}
#app {
  height:100%;
  background-color: rgb(202, 235, 248);
}
</style>
