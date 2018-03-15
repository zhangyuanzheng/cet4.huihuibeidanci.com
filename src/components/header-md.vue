<template>
  <div id="header-md">
    <h3>{{Title}}</h3>
    <div v-show="showMore" id="menu">
      <img src="" alt="三" @click="openMenu">
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-md',
  props:['Title','show'],
  computed:{
    showMore:function () {
      if(this.show == 'Y'){
        return true
      }else if(this.show == 'N'){
        return false
      }
    }
  },
  methods:{
    openMenu:function(){
        this.$store.state.leftMenuShow = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../assets/css/variable.less";
#header-md{
  padding:10px 20px;
  box-shadow: #ddd 0 3px;
  background:linear-gradient(270deg,@green 0%,@turquoise 100%);
  color:white;
  overflow: hidden;
  line-height: 40px;
  font-size:200%;
}
h3{
  float: left;
}
#menu{
  float: right;
}
</style>
