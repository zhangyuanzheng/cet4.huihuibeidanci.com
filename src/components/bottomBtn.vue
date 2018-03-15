<template>
  <div id="bottomBtn" >
    <button id="btn" v-bind:class="colorName" class="text-size-md">
      {{btnValue}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'bottomBtn',
  props:['btnValue','color','to'],
  computed:{
    colorName:function(){
      console.log(this)
      if(this.color == 'orange'){
        return 'orange'
      }else if(this.color == 'green'){
        return 'green'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../assets/css/variable.less";
  #bottomBtn{
    width:100%;
    color: #fff;
    background: rgba(255,255,255,.7);
    padding:15px 0 15px 0;
  }
  #btn{
    border:none;
    display:block;
    border-radius: @border-radius;
    width:80%;
    margin:0 auto;
    padding:10px 20px;
    box-shadow: #ddd 0 3px;
    text-align: center;
    /*background:#eb6419;*/
    letter-spacing: 2px;
  }
  .orange{
    background-color: @orange;
  }
  .green{
    background-color: @green;
  }
</style>
