<template>
  <div>
    <h1>球员页面</h1>
    <ul>
      <li>编号：{{detail.uid}}</li>
      <li>名字：{{detail.name}}</li>
      <li>得分：{{detail.pointer}}</li>
    </ul>
    <router-link :to="profile">简介</router-link>
    <router-link :to="stats">数据</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<script>
    export default {
      name:"player",
      data(){
        return {
          detail:{uid:1,name:"库里",pointer:26},
          profile:'',
          stats:'',
        }
      },
      mounted(){
        this.detail=this.getPlayer(this.$route.params.uid);
        this.profile='/player/'+this.$route.params.uid+'/profile';
        this.stats='/player/'+this.$route.params.uid+'/stats';
      },
      beforeRouteUpdate(to,from,next){

        this.detail=this.getPlayer(to.params.uid);
        this.profile='/player/'+to.params.uid+'/profile';
        console.log(this.profile);
        this.stats='/player/'+to.params.uid+'/stats';
        next();
      },
      methods:{
        getPlayer(uid){
          switch(uid.toString()){
            case "1":
              return {uid:1,name:"库里",pointer:26};
            case "2":
              return {uid:2,name:"哈登",pointer:30};
            default:
              return {uid:-1};
          }
        }
      }
    }
</script>

<style scoped>

</style>
