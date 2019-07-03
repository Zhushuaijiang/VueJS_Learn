#多参数路由
================
    ##知识点

    路由属性props

    #实战演习

    *User.vue
    <template>
        <div>
            <h1>User</h1>
            <p>uid={{uid}},{{nationality}}</p>
            <p>$router.params.uid={{$route.params.uid}}</p>
            <p>$router.params.uid={{$route.params.nationality}}</p>

        </div>
    </template>

    <script>
        export default {
            name: "User",
            props:['uid','nationality']
        }
    </script>

    <style scoped>

    </style>
------------------------------------------------------------
    *router/index.js
------------------------------------------------------------
    import User from '@/components/User'

        {
          path:'/user/:uid/:nationality',
          name:'User',
          component:User,
          props:true
        },
------------------------------------------------------------
    *App.vue
        <router-link to="/user/1/usa">user1</router-link>
        <router-link to="/user/1/china">user2</router-link>
        <router-link to="/user/1/zsj">user3</router-link>
        <hr>
        <router-view/>
