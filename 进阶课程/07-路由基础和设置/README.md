#路由基础和设置
    基础安装：npm install vue-router --save --save-exact
    路由设定：src/router/index.js
    官网：http://router.vuejs.org/zh-cn

    1:要把 Vue Router 添加进来
       npm install vue-router --save --save-exact
    2:将组件 (components) 映射到路由 (routes)
        2.1  目录
            ....router--index.js
            import HelloWorld from '@/components/HelloWorld'
            import About from '@/components/About'
            import News from '@/components/News'

    3:然后告诉 Vue Router 在哪里渲染它们
        3.1  App.vue <router-view/>