<template>
  <div id="face">
    <div class="lf faceimg">
      <img :src="$store.state.headimgurl" alt="666">
    </div>
    <div class="lf showx">
      <h3 id="showname">
        {{showname}}
        <notice :num="this.$store.state.notice"
                v-show="noticeShow"
                class="notice">
        </notice>
      </h3>
      <h4>
        记忆力：<span class="text-orange">{{$store.state.memory}}</span><br>
        经验值：<span class="text-green">{{$store.state.xp}}</span>
      </h4>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
  import notice from './notice.vue'

  export default {
    name:'face',
    components:{notice},
    props:['openid'],
    computed:{
      noticeShow:function(){
        if(this.$store.state.notice==0){
          return false;
        }else{
          return true;
        }
      },
      showname:function(){
        var showname = this.$store.state.name;
        if(showname.length>15){
          showname = showname.substring(0,8)+'...'
        }
        return showname;
      }
    },
    mounted:function(){
      if(this.showname.length<5){
        document.getElementById('showname').style.fontSize = '200%'
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../assets/css/variable.less";

  #face{
    width:100%;
    padding:5vw 4vw;
    /*height:100vh;*/
    .faceimg{
      width:20%;
    }
    img{
      width:100%;
      border:6px solid #eae9e9;
    }
    .showx{
      margin-top:10px;
      margin-left:20px;
      width:70%;
    }
    .showx h3{
      position: relative;
      width:100%;
      font-size:200%;
    }
    .showx h4{
      margin-top:5px;
      font-size:100%;
    }
    .showx span{
      margin-right:10px;
    }
    .notice{
      position: absolute;
      top:0;
      left:70%;
    }
  }

</style>
