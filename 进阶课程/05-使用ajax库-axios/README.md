使用ajax库-axios
==================
##知识点

* 为网页新增远程数据能力
* HTTP库axios（浏览器|nodejs）

#axios：promise based Http client for bower and node.js
http://github.com/axios/axios


# 实战演习

cd vuedemo
npm install --save --save-exact axios vue-axios

** 新增组件
。。。。
    import axios from 'axios'
    improt VueAxios from 'vue-axios'
    Vue.use(VueAxios,axios)
    ...
     <div>{{content}}</div>
     export default{
        name:'helloworld',
        data(){
            return { content :""};
        },
        mounted(){
            this.axios.post("http://api.komavideo.com/news/list").then(body=>{
                this.content=body.data;
            });
        }
     }
