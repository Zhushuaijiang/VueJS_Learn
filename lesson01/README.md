##知识点

* html5 文档
* vue.js导入
* Vue对象

## index.html
从起到一个index.html开始

 ## vue.js 引用

 <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>

 ##html 代码块

 <div id="myApp">
    {{message}}
 </div>

 ## javascript脚本部分

  var myApp=new Vue({
    el:'myApp',
    data:{
        message:"Hello Vue.js!"
    }
  });