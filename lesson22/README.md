#组件的基础
   --知识点
   组件(component,Portlet)

   *** 组件
   组件就是一小块内容区域,完成一个小的页面功能

   --html  参考第六课
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width-device-width,initial-scale=1">
       <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
       <title>lesson22-组件的基础</title>
   </head>
   <body>
   <div id="myApp">
       <today-weather></today-weather>
   </div>
   <script>
       Vue.component('today-weather',{
           template:'<div>今天下大雨！出不去门</div>'
       });
       var myApp=new Vue({
           el:'#myApp'
       });
   </script>
   </body>
   </html>

   -end