<template>
  <div class="tabar">
      <ul>
          <li v-for="(i,n) in arr" :key="n" @click="to(i.path)" 
          :class="{active:$route.path.includes(i.path)}">{{i.title}}</li>
          
      </ul>
  </div>
</template>

<script>
export default {
    data(){return{
        arr:[
            {title:'个性推荐',path:'/home/a'},
            {title:'歌单',path:'/home/b'},
            {title:'排行榜',path:'/home/c'}
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
ul{display: flex;justify-content: flex-start;align-items: center;}
ul>li{margin-right: 20px;color:#6f6f67;}
ul>li:hover{color: black;}
.active{color: #000;font-weight: bold;font-size: 20px;}
</style>