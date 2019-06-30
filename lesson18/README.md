##表单复选框

*** 知识点
    v-model
    input[type='checkbox']

    --html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width-device-width,initial-scale=1">
        <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
        <title>lesson18-表单复选框</title>
    </head>
    <body>
    <div id="myApp">
        <h1>表单复选框</h1>
        <input type="checkbox" id="man" value="男" v-model="sex">
        <label for="man"></label>
        <input type="checkbox" id="woman" value="女" v-model="sex">
        <label for="woman"></label>
        <input type="checkbox" id="unkown" value="未知" v-model="sex">
        <label for="unkown"></label>
        <p>你选择的性别是：{{sex}}</p>
    </div>
    <script>
        var myApp=new Vue({
            el:'#myApp',
            data:{
                sex:[]
            }
        });
    </script>
    </body>
    </html>

    --end

