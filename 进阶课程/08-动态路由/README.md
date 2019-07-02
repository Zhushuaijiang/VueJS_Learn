#动态路由
    ##知识点：
    动态路由是指在URL路径中包含有动态参数的路由，比如说：/player/1，/player/2，/player/2

    ##动态路由的配置设置

    ##制定玩家的动态路径：/player/:id

    player.vue
    router.index.js
    App.vue

    ### player
    ~~~html
    <template>
        <div>
            <h1>球员页面</h1>
            <p>{{detail}}</p>
        </div>
    </template>
    <script>
        export default{
            name:"player",
            data(){
                return {
                    detail:{uid:1 ,name:"库里",pointer:26}
                }
            },
            mounted(){
                this.detail=this.getPlayer(this.$router.params.uid);
            },
            beforeRouteUpdate(to,from,next){
                this.detail=this.getPlayer(to.params.uid);
                next();
            },
            methods:{
                getPlayer(uid){
                    switch(uid.toString()){
                        case "1":
                        return {uid:1 ,name:"库里",pointer:26};
                        case "2":
                        return {uid:2 ,name:"哈登",pointer:30};
                        default:
                        return {uid:-1};
                    }
                }
            }
        }
    </script>

   ~~~~end