##事件处理器

 ## 知识点
    v-on:(event)

    页面元素的事件绑定 （click keyup mouseover edt.. ）


--html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width,initial-scale=1">
    <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
    <title>lesson16-事件处理器</title>
</head>
<body>
<div id="myApp">
    <h1>事件处理器</h1>
    <input type="text" id="txtname" v-on:keyup="txtKeyup($event)">
    <button id="btnOk" v-on:click="btnClick($event)">OK </button>
</div>
<script>
    var myApp=new Vue({
        el:'#myApp',
        data:{
        },
        methods:{
            txtKeyup:function (event) {
                this.debugLog(event);
            },
            btnClick:function (event) {
                this.debugLog(event);
            },
            debugLog:function (event) {
                console.log(event.srcElement.tagName,
                    event.srcElement.id,
                    event.srcElement.innerHTML,
                    event.key?event.key:""
                );
            }
        }
    });
</script>
</body>
</html>

---end