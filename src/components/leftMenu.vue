<template>
  <div id="leftMenu" >
    <div id="menu">
      <h2 class="text-align-center text-white">CET-4</h2>
      <h3 class="text-align-center text-white">四级单词记忆管理</h3>
    </div>
    <div id="cover" @click="closeMenu"></div>
  </div>
</template>

<script>
export default {
  name: 'leftMenu',
  methods:{
    closeMenu:function(){
      this.$store.state.leftMenuShow = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../assets/css/variable.less";
#menu{
  width:70%;
  height:100%;
  padding-top:50px;
  position: fixed;
  top:0;
  left:0;
  z-index:100;
  background: @gray-dark;
  h2{
    font-size:300%;
  }
  h3{
    font-size:100%;
  }
}
#cover{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  left:0;
  z-index:99;
  background: @black;
  opacity:.2;
}
</style>
