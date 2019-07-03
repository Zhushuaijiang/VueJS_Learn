#路由编程
=============
    #知识点
    router-link （之前做法）
    router.push(location,onComplete?,onAbort?)

    #实战演习

    #App.vue

    ~~html

   <templete>
        <button @click='btnClcik(1)'>库里</button>
           <button @click='btnClcik(2)'>哈登</button>
           <hr/>
           <router-link :to="{name:'player',params:{uid:1}}">库里</router-link>
           <router-link :to="{path:'/player/2/stats'}">哈登</router-link>
   </template>

   <script>
    methods:{
         btnClick:function(uid){
              //写法
             this.$router.push({path:`/player/${uid}`});
             // this.$router.push({path:`/player/${uid}/stats`});
             // this.$router.push({name:'player',params:{uid:uid}});
             // this.$router.push({path:'/player',query:{uid:uid}});
             // this.$router.go(-1);
         }
    }
   </script>