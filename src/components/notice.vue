<template>
  <div id="notice">
    {{numText}}
  </div>
</template>

<script>
  export default {
    name:'notice',
    props:['num'],
    computed:{
      numText:function(){
        var numText = parseInt(this.num);
        if(numText>99){
          return 99
        }
        return numText;
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../assets/css/variable.less";

  #notice{
    color: #fff;
    background-color: @orange;
    text-align: center;
    min-width:6vw;
    line-height:6vw;
    font-size:40%;
    border-radius:20px;
  }
</style>
