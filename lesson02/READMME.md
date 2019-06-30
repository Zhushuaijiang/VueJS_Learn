##知识点

* v-if
*v-for
条件循环

---html

<p v-if="seen">快看我</p>

###vue-for

----html start

<ol>
    <li v-for="game in games">
    {{game.title}}
    </li>
<ol>
--html end


##  综合

    <div id=myApp>
        <h3>游戏列表</h3>
        <div v-if="seen">2019最新</div>
        <ol v-for="game in games">{{game.title}}/{{game.price}}元</ol>
    </div>

    <script>
        var myApp=new Vue({
            el:'#myApp',
            data:{
            seen:true,
            games:[{title:"游戏1",price:"10.00"},{title:"游戏2",price:"20.00"},{title:"游戏3",price:"30.00"}]
            }
        });
    </script>