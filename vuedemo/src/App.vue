<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <button class="btn btn-primary">确定</button>
    <button class="btn btn-success">使用</button>
    <button class="btn btn-danger">注意</button>
    <hr>
    <div class="myclass">你好Vue！</div>
    <router-link to="/">主页</router-link>
    <router-link to="/About">关于我</router-link>
    <router-link to="/News">新闻</router-link>
    <router-link to="/player/1">库里</router-link>
    <router-link to="/player/2">哈登</router-link>
    <router-link to="/player/3">其他球员</router-link>

    <router-view/>
  </div>
</template>

<script type="es6">
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
