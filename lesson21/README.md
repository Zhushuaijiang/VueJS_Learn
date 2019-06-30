#表单修饰符

** 知识点
    ** v-model.lazy
    ** v-model.number
    ** v-model.trim

    用户输入内容时不做绑定数据更新处理，在控件的onchange事件中更新绑定的变量
    ** v-model.lazy
    用户名：<input v-model.lazy="username"></input>

    将用户输入的内容转换为数值类型，如果用户输入非数值的时候，则返回NAN
   ** v-model.number
   年龄： <input v-model.number="age"></input>


    去掉用户输入内容两端的空格
   ** v-model.trim
   意见： <input v-model.trim="content"></input>


---综合案例--

----html start
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width,initial-scale=1">
    <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
    <title>lesson21-表单修饰符</title>
</head>
<body>
    <div id="myApp">
        <div>
            <label for="username">用户：</label>
            <input type="text" id="username" v-model="username" @change="checkUsername">
            <span v-if="checkUsernameOK">可注册</span>
        </div>
        <div>
            <label for="age">年龄：</label>
            <input type="number" id="age" v-model="age">

        </div>
        <div>
            <label for="content">个人简介：</label> <br>
            <textarea  id="content"  v-model.trim="content" cols="55" rows="8"></textarea>
        </div>
        <h4>信息区</h4>
        <p> 姓名：{{username}}</p>
        <p>年龄：{{age}}</p>
        <p>简介：{{content}}</p>
    </div>
    <script>
        var myApp=new Vue({
           el:'#myApp',
           data:{
               username:'zsj',
               age:"",
               content:"hello，我是竺帅江",
               checkUsernameOK:false
           },
           methods:{
               checkUsername:function () {
                   if(this.username.length>0) this.checkUsernameOK=true;
                   else this.checkUsernameOK=false
               }
           }
        });
    </script>
</body>
</html>

----html  end

