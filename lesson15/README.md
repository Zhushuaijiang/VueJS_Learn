##JS对象迭代

##知识点
    v-for
    循环JS对象，把对象内容循环显示到页面上

    --html start

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width-device-width,initial-scale=1">
        <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
        <title>lesson15-JS对象迭代</title>
        <style>
            #myApp{
                width: 500px;
                height: 200px;
                margin: 100px auto;
                background: pink;
                box-sizing: border-box;
            }
            #myApp  dl>dt{
                text-align: center;
            }
            #myApp  dd{
                list-style: none;
            }
            #myApp ul{
                list-style: none;

            }
            #myApp>dl>li{

            }
        </style>
    </head>
    <body>
    <div id="myApp">
        <dl>
            <dt>USERINFO</dt>
            <dd><ui><li v-for="(value,key) in user">{{key}}:{{value}}</li></ui> </dd>
        </dl>

    </div>
    <script>
        var myApp=new Vue({
            el:'#myApp',
            data:{
                user: {
                    name:"zhushuaijiang",
                    sexName:"man",
                    age:"29",
                    tel:"15700169438",
                    email:"zhushuaijiang@gmail.com",
                    QQ:"504625088",
                    WX:"15700169438"
                }
            },
        });
    </script>
    </body>
    </html>

    ---html end