##处理用户输入

## 知识点 v-model

为页面输入框进行数据绑定 例如

* input
* select
* textarea
* componments

--html
    <div id="myApp">
        <p>你最新欢的游戏是:{{mygame}}</p>
        <input v-model="mygame"></input>
    </div>
    <script>
        var myApp=new Vue({
            el:'myApp',
            data:{
                mygame:'超级玛丽'
            }
        });
    </script>
---html-end