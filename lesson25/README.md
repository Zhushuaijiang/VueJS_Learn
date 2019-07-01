#  组件的数据

    知识点：
    *组件的数据函数

    为Vue.js 组件添加数据，使组件可以动态显示各种数据，注意是数据驱动，不是数据属性

    --综合例子

--html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width,initial-scale=1">
    <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
    <title>lesson25-组件数据</title>
</head>
<body>
<div id="myApp">
   <div>今天的天气是<today-weather/></div>
</div>
<script>
    Vue.component('today-weather',{
       template:'<strong>{{todayWeather}}</strong>',
        data:function () {
            return {todayWeather: "大暴雨"}
        }
    });
    var myApp = new Vue({
        el:'#myApp',
        data:{
        },
    });
</script>
</body>
</html>

--end
