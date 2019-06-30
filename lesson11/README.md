#class 对象绑定

* v-bind:class
## v-bind:class
为html 标记绑定样式单的对象

--html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width,initial-scale=1">
    <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
    <title>lesson11-class对象绑定</title>
    <style>
        .active{
            color: red;
        }
        .big{
           font-size: 40px;
        }
    </style>
</head>
<body>
<div id="myApp">
    <div :class="myclass">红色文本</div>
    <button @click="btnClick">改变class</button>
</div>
<script>
    var myApp=new Vue({
       el:'#myApp',
       data:{
           myclass:{
               active:true,
               big:true
           },
       } ,
        methods:{
           btnClick:function () {
               this.myclass.big = !this.myclass.big;
           }
        }
    });
</script>
</body>
</html>

---