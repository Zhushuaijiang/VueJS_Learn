##class绑定

* v-bind:class
 为html标记绑定样式单class属性

 --html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width,initial-scale=1">
    <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
    <title>lesson10-class绑定</title>
    <style>
            .active{
                color: red;
            }
        </style>
</head>
<body>
<div id="myApp">
    <div v-bind:class="{active:isActive}">红色文本1</div>
    <div :class="{active:isActive}">红色文本2</div>
    <button @click="btnClick">改变class</button>
</div>
    <script>
        var myApp = new Vue({
            el: "#myApp",
            data: {
                isActive: true,
            },
            methods: {
                btnClick: function () {
                    this.isActive = false;
                },
            },
        });
    </script>
</body>
</html>
 --