##嵌套路由
   ##知识点

   嵌套路由是指在动态路由的基础上再附加的url（即组件）,比如：(player/:uid/*)
   /player/1/profile,/player/1/stats等

   嵌套路由的使用方法

   ##实战演习

    ---player/profile.vue---
    <template>
      <div>
        <h2>球员简介：{{$route.params.uid}}</h2>
      </div>
    </template>


    ----player/stats.vue-----
    <template>
      <div>
        <h2>球员数据：{{$route.params.uid}}</h2>
      </div>
    </template>

    ----Player.vue----
      <router-link :to="profile">简介</router-link>
      <router-link :to="stats">数据</router-link>
      <router-view/>

   ---router/index.js ----
    import Playerprofile from '@/components/player/profile'
    import Playerstats from '@/components/player/stats'

    {
          path: '/player/:uid',
          name: 'player',
          component: Player,
          children: [{
            path:
              '/Player/:uid',
          }
            , {path: 'stats', component: Playerstats},
            {
              path: 'profile', component: Playerprofile
            }
          ]
        }