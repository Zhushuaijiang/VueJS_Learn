import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import News from '@/components/News'
import Player from '@/components/Player'
import Playerprofile from '@/components/player/profile'
import Playerstats from '@/components/player/stats'

import SettingDetail from '@/components/setting/Detail'
import SettingHeader from '@/components/setting/Header'
import SettingSlide from '@/components/setting/Slide'

import User from '@/components/User'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        myheader:SettingHeader,
        mydetail:SettingDetail,
        myslide:SettingSlide
      }
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      alias:'aboutme'
    },
    {
      path:'/curry',
      redirect:'player/1'
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
    },
    {
      path:'/user/:uid/:nationality',
      name:'User',
      component:User,
      props:true
    },
  ]
})
