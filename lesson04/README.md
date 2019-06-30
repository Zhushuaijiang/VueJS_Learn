#按钮事件

##知识点
v-on:keydown,keyup,click,dbclick,load,etd

--html


<div id="myApp">
    <p>你最新欢的游戏是:{{mygame}}</p>
  <button v-on:click="btnclick('我的世界1')">我的世界1</button>
  <button v-on:click="btnclick('我的世界2')">我的世界2</button>
  <button v-on:click="btnclick('我的世界3')">我的世界3</button>
  <button v-on:click="btnclick('我的世界4')">我的世界4</button>
  <button v-on:click="btnclick('我的世界5')">我的世界5</button>
  <button @click="btnclick('我的世界6')">我的世界6</button>
</div>
<script>
    var myApp=new Vue({
        el:'#myApp',
        data:{
            mygame:'超级玛丽'
        },
        methods:{
            btnclick:function (panme) {
                this.mygame=panme;
            }

        },
    });
</script>

--html-end