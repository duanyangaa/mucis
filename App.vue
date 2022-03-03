<template>
  <div id="app">
    <Header/>
    <div id="father" :style="`height:${w}px`">
      <div class="taber">
        <Tabar/>
      </div>
      <div class="tent">
        <router-view></router-view>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Tabar from './components/Tabar.vue'
export default ({
  data(){return{
  w:window.innerHeight-160
  }},
  mounted(){
    window.onresize=(()=>{
      if(window.innerHeight<400){return}
      this.w=window.innerHeight-160
      })
  },
  components:{Header,Footer,Tabar}
})
</script>

<style scoped>
#father{
  width: 100%;
  /* height: 600px; */
  background-color: bisque;
  display: flex;
  margin-top: 80px;
  margin-bottom: 80px;
}
.taber{
  min-width: 200px;
  height: 100%;
  background-color: aqua;
}
.tent{
  min-width: 600px;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  
}
</style>