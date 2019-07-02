<template>
  <div>{{content}}</div>
</template>

<script>
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
