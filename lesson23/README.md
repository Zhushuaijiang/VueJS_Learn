#局部的组件

知识点
    组件的局部注册

    **组件
    vue.js 的组件不仅可以单独申明注册使用，还可以在Vue实例中进行局部注册使用

    ---html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width-device-width,initial-scale=1">
        <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
        <title>lesson23-局部组件</title>
    </head>
    <body>
    <div id="myApp">
        <my-weather></my-weather>
    </div>
    <script>
        var weathercomponent={
                template:'<div>今天下大雨！出不去门</div>'
            };
        var myApp = new Vue({
            el:'#myApp',
            data:{
            },
            components:{
                'my-weather':weathercomponent
            }
        });
    </script>
    </body>
    </html>

    --end