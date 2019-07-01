#传递变量

 知识点：为组件传递变量数据

  *****  组件的数据

  制作可接受变量参考的组件

  **综合例：
--html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width,initial-scale=1">
    <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
    <title>lesson27-传递变量</title>
</head>
<body>
    <div id="myApp">
        <div>请输入您的名字：<input type="text" v-model="myname"></div>
        <hr/>
        <say-hello :pname="myname"></say-hello>
    </div>
    <script>
        Vue.component('say-hello',{
        props:['pname'],
            template:'<div>你好，<strong>{{pname}}</strong></div>'
        });
        var myApp=new Vue({
           el:'#myApp',
           data:{
               myname:'Zsj'
           }
        });
    </script>
</body>
</html>

--end