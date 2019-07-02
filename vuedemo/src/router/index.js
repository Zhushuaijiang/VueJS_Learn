import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import News from '@/components/News'
import Player from '@/components/Player'
import Playerprofile from '@/components/player/profile'
import Playerstats from '@/components/player/stats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
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
  ]
})
