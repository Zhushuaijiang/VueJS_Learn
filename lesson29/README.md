#事件传递

    v-on
    $emit

    ##v-on
    侦听组件事件,当组件触发事件后进行事件处理

    ##$emit
     触发事件，并将数据提交给侦听者

--html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width,initial-scale=1">
    <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
    <title>lesson29-事件传递</title>
</head>
<body>
    <div id="myApp">
            <h1>人生减法</h1>
        <sub-method :a="6" :b="12" v-on:sub_event="getsubResult"></sub-method>
        <hr>
        <h3>{{result}}</h3>
    </div>
    <script>
        Vue.component('sub-method',{
            props:['a','b'],
            template:'<div><button v-on:click="sub">减法</button></div>',
            methods:{
                sub:function () {
                    var value=0;
                    value=this.a-this.b;
                    this.$emit('sub_event',{
                       result:value
                    });
                }
            }

        });
        var myApp=new Vue({
           el:'#myApp',
           data:{
                result:0
           },
            methods:{
                getsubResult:function (pval) {
                    this.result=pval.result;
                }
            }
        });
    </script>
</body>
</html>

--end