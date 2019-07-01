#表行组件

## 知识点
制作表行组件

为自己的页面表格编写表行组件

综合例

--html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width,initial-scale=1">
    <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
    <title>lesson24-表行组件</title>
</head>
<body>
    <div id="myApp">
        <h1>2019最期待游戏</h1>
        <table>
            <tr>
                <td>编号</td>
                <td>游戏名称</td>
            </tr>
            <tr is="my-row1"></tr>
            <tr is="my-row2"></tr>
            <tr is="my-row3"></tr>

        </table>
    </div>
    <script>
        Vue.component('my-row1',{
           template:'<tr><td>1:</td><td>麻将棋1</td></tr>'
        });
        Vue.component('my-row2',{
            template:'<tr><td>2:</td><td>麻将棋2</td></tr>'
        });
        Vue.component('my-row3',{
            template:'<tr><td>3:</td><td>麻将棋3</td></tr>'
        });
        var myApp = new Vue({
            el:'#myApp',
            data:{
            },
           methods:{
           }
        });
    </script>
</body>
</html>

--end