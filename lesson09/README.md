##  设置计算属性


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width,initial-scale=1">
    <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
    <title>lesson09-设置计算属性</title>
</head>
<body>
<div id="myApp">
    {{priceUSD}}美元={{priceJPY}}日元={{priceRMB}}人民币
    <button @click="btnClick(1000)">把人民币改为1000</button>
</div>
<script>
    var myApp = new Vue({
        el: '#myApp',
        data: {
            priceUSD: 1
        },
        computed: {
            priceRMB: {
                get: function () {
                    return this.priceUSD * 6.865;
                },
                set: function (value) {
                    this.priceUSD = value / 6.865;
                }
            },
            priceJPY: {
                get: function () {
                    return this.priceUSD * 107.88;
                },
                set: function (value) {
                    this.priceUSD = value / 107.88;
                }
            }
        },
        methods: {
            btnClick: function (newPrice) {
                this.priceRMB = newPrice;
            }
        }
    });
</script>
</body>
</html>