<template>
  <div class="footer">
    <div class="a1">
      <div class="a1_t">
        
      </div>
      <div class="a1_d">

      </div>
    </div>
    <div class="a2"></div>
    <div class="a3"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
  width: 100%;
  min-width: 840px;
  height: 80px;
  position: fixed;
  bottom: 0;
  background-color: cadetblue;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e7e4e7;
}
.a1{
  width: 220px;background-color: aliceblue;height: 100%;
  display: flex;
}
.a1_t{width: 60px;height: 60px;margin:10px;background-color: burlywood}
.a1_d{width: 130px;height: 60px;margin: 10px;margin-left:0;background-color: black;}
.a2{width: 400px;height: 100%;background-color: brown;}
.a3{width: 220px;height: 100%;background-color: blueviolet;}
</style>