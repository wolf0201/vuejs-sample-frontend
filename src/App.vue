<template>
  <div id="app">
    <router-link to="/">Hello</router-link> |
    <router-link to="/draganddrop">ドラッグ&ドロップ</router-link> |
    <router-link to="/bootstrap">Bootstrap</router-link> |
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
