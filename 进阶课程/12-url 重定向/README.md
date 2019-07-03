#url重定向

    #知识点
    重定向指令：re'direct
    路由别名：alias

    #实战演习

    ---About.vue----
    ---router/index.js---
    import SettingSlide from '@/components/About'

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

    ----App.vue----------
   <router-link to="/curry">curry</router-link>