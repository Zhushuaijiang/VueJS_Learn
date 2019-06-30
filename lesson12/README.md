##条件渲染

知识点
*    v-if
*    v-else-if
*    v-else

*** v-if
判断vue.js 的变量的值，然后执行页面渲染逻辑 (if-elseif-else)

--html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width,initial-scale=1">
    <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
    <title>lesson12-条件渲染</title>
</head>
<body>
<div id="myApp">
    <h2 v-if="result==0">分成绩未公布</h2>
    <h2 v-else-if="result<60">满分是100分，你只考了{{result}}分，骚年，不及格！</h2>
    <h2 v-else-if="result<80">满分是100分，你考{{result}}分，骚年，继续加油！</h2>
    <h2 v-else>满分是100分，你居然考了{{result}}分，考的很好，play game！</h2>
    <button @click="btnClick">考试成绩</button>
</div>
<script>
    var myApp=new Vue({
       el:'#myApp',
       data:{
           result:0
       },
        methods:{
            btnClick:function () {
                this.result=Math.round(Math.random()*100);
            }
        }

    });
    myApp.btnClick();
</script>
</body>
</html>

--end