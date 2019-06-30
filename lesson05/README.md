##组件

##知识点

conmponment
定义页面局部区域块，完成小功能

-html-start
<div id="myApp">
    <ol>
        <game-item v-for="item in games" v-bind:game="item"></game-item>
    </ol>
</div>

<script>
    /*--组件定义，game-item*/
    Vue.component('game-item',{
        props:['game'],
        template:'<li>{{game.title}}</li>'
    });
    var myApp = new Vue({
            el: '#myApp',
            data:{ games: [{
                title: '斗地主1',
            }, {
                title: '斗地主2',
            }, {
                title: '斗地主3',
            }]
            }
        });
</script>

--html -end