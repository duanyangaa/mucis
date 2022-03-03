<template>
  <div class="home">
      <div class="topbatar">
        <Topbatar/>
        <hr class="hr">
      </div>
      <div class="cont"><router-view></router-view></div>
  </div>
</template>

<script>
import Topbatar from './children/topbabar.vue'
export default {
components:{Topbatar}
}
</script>

<style scoped>
.home{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.topbatar{
  width: 100%;
  height: 80px;
}
.cont{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 10px 30px;
  box-sizing: border-box;
}
.hr{border: 0;border-top: 1px solid rgb(231 228 231);}
</style>