<template>
  <div id="CreatSuccess">
    <header-md Title="CET-4" show="N"></header-md>
    <div class="padding-md">
        <h3>注册成功</h3>
    </div>



    <bottomBtn @click.native="toIndex" btnValue="完成注册" color="orange" class="bottomBtn"></bottomBtn>
  </div>
</template>

<script>
  import headerMd from '../components/header-md.vue'
  import bottomBtn from '../components/bottomBtn.vue'
  export default {
    name:'CreatSuccess',
    components:{headerMd,bottomBtn},
    methods:{
      toIndex:function () {
        this.$router.push({path:'/index'})
      },

    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/css/main.less";
  .input{
    width:100%;
    border:1px solid @gray-lighter;
    height:35px;
    margin-top:20px;
    outline:none;
    font-size:100%;
    color:@gray;
    text-indent: 5px;
  }
  .radio-sm{
    li{
      float: left;
      padding:5px;
      margin-right:15px;
      margin-bottom:20px;
    }
    .active{
      border:1px solid @green;
      div{
        background-color: @green;
        width:50px;
        height:50px;
        text-align: center;
        line-height: 50px;
        color: @white;
      }
    }
    .noactive{
      border:1px solid transparent;
      div{
        background-color: @gray-lighter;
        width:50px;
        height:50px;
        border:1px solid @gray-light;
        text-align: center;
        line-height: 50px;
        color: @gray-darker;
      }
    }
  }

</style>
