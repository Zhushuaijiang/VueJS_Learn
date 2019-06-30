##观察属性  一个美元兑换日元兑换人民的例子
watch prop

## 知识点
   watch
  与computed属性类似,用于观察变量的变化，然后进行相应的处理
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width,initial-scale=1">
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <title>lesson08-观察属性</title>
    <style>
        #myApp{
            position: relative;
            background-color: gold;
        }
        #myApp input{
        position: absolute;
           left: 50%;
            margin-left: -10px;
        }
    </style>
</head>
<body>
<div id="myApp">
    {{priceUSD}}美元={{priceJPY}}日元={{priceRMB}}人民币
    <input v-model="priceUSD" min="0" max="999999999" type="number">
    <!--<button @click="btnAddClick(1)">加1美元</button>-->
    <!--<button @click="btnSubClick(1)">减1美元</button>-->
</div>
<script>
    var myApp=new Vue({
        el:'#myApp',
        data:{
            priceUSD:0,
            priceJPY:0,
            priceRMB:0,
        },
        watch:{
            priceUSD:function(newVal,oldVal){
                console.log(newVal,oldVal);
                this.priceJPY = 107.88 * newVal;
                this.priceRMB = 6.865 * newVal;
            },
        },
        methods:{
            btnAddClick:function(newPrice){
                this.priceUSD +=newPrice;
            },
            btnSubClick:function(newPrice){
                this.priceUSD +=newPrice;
            }
        }
    });
</script>
</body>
</html>