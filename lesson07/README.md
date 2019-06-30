#计算属性

## 知识点
       computed
   处理元数据（便于进行二次利用，比如：消费税自动计算功能）

<div id="myApp">
    {{priceUSD}}美元={{priceJPY}}日元={{priceRMB}}人民币
</div>
<script>
    var myApp=new Vue({
        el:'#myApp',
        data:{
            priceUSD:1
        },
        computed:{
            priceRMB:function () {
                return this.priceUSD * 6.865;
            },
            priceJPY:function(){
                return this.priceUSD * 107.88;
            },
        },
    });
</script>