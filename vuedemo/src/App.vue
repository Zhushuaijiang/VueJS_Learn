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
    <router-link to="/curry">curry</router-link>
    <router-link to="/News">新闻</router-link>
    <router-link to="/player/1">库里0</router-link>
    <router-link to="/player/2">哈登0</router-link>
    <router-link to="/player/3">其他球员</router-link>
    <!--路由-->
    <button @click='btnClick(1)'>库里01</button>
    <button @click='btnClick(2)'>哈登01</button>
    <hr/>
    <router-link :to="{name:'player',params:{uid:'1'}}">库里02</router-link>
    <router-link :to="{path:'/player/2/stats'}">哈登02</router-link>

    <!--路由拼图-->
    <table width="100%">
      <tr>
        <td colspan="2" style="background-color:salmon">
            <router-view name="myheader"></router-view>
        </td>
      </tr>
      <tr>
        <td width="20%" style="background-color:darkcyan">
          <router-view name="myslide"></router-view>
        </td>
        <td width="20%" style="background-color:seashell">
          <router-view name="mydetail"></router-view>
        </td>
      </tr>
    </table>
    <!--多参数路由-->

    <router-link to="/user/1/usa">user1</router-link>
    <router-link to="/user/1/china">user2</router-link>
    <router-link to="/user/1/zsj">user3</router-link>
    <hr>
    <router-view/>

  </div>
</template>

<script type="es6">
export default {
  name: 'App',
  methods:{
    btnClick:function(uid){
       this.$router.push({path:`/player/${uid}`});
      // this.$router.push({path:`/player/${uid}/stats`});
      // this.$router.push({name:'player',params:{uid:uid}});
      // this.$router.push({path:'/player',query:{uid:uid}});
      // this.$router.go(-1);
    }
  }
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
