<template>
  <div id="header-lg">
    <h3>{{bigTitle}}</h3>
    <h4>{{noteTitle}}</h4>
  </div>
</template>

<script>
export default {
  name: 'header-lg',
  props:['bigTitle','noteTitle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../assets/css/variable.less";
#header-lg{
  padding:30px 20px;
  box-shadow: #ddd 0 3px;
  background:linear-gradient(270deg,@green 0%,@turquoise 100%);
  color:white;
}
h3{
  font-size:250%;
}
h4{
  font-size:80%;
}
</style>
