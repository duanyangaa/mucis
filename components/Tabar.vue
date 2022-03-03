<template>
  <div class="tabar">
      <ul>
          <li v-for="(i,n) in arr" :key="n" @click="to(i.path)" :class="{active:$route.path.includes(i.path)}">{{i.title}}</li>
      </ul>
  </div>
  
</template>

<script>
export default {
data(){return{
    arr:[
        {title:'推荐音乐',path:"/home"},
        {title:'最近播放',path:"/broadcast"},
        {title:'我的',path:"/we"}
    ]
}},
methods:{
    to(e){
        if(this.$route.path==e){console.log("k");return}
        this.$router.push(e)
    }
}
}
</script>

<style scoped>
.tabar{
    width: 200px;
    height: 100%;
    background-color: #fff;
    border-right: 1px;
    color: rgb(122, 118, 118);
    position: fixed;
    left: 0;
    border-right: 1px solid rgb(231 228 231);
}
ul{margin: 0;padding: 0;position: relative;}
ul>li{list-style: none;width: 100%;height: 40px;
line-height: 40px;margin-top: 10px;}
ul>li:hover{
    background-color: rgb(231, 228, 231);color: black;
}
.active{background-color: rgb(231, 228, 231);color: black;font-weight: bold;}
</style>