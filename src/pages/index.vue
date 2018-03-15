<template>
  <div id="index">
    <header-md Title="CET-4" show="Y"></header-md>
    <leftMenu v-show="this.$store.state.leftMenuShow"></leftMenu>
    <face></face>
    <div class="more"></div>
    <speed class="animated pulse"></speed>

    <div id="btn">
      <div id="btn_left" class="btnStyle">继续计划</div>
      <div id="btn_right" class="btnStyle" @click="go([$router,'ReviseBegin'])" >复习加经验</div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from  'vuex'
  import headerMd from '../components/header-md.vue'
  import leftMenu from '../components/leftMenu.vue'
  import face from '../components/face.vue'
  import speed from '../components/speed.vue'
  export default {
    name:'index',
    components:{headerMd,leftMenu,face,speed},
    data:function(){
      return {
        show:false
      }
    },
    methods:{
      ...mapMutations([
        "go"
      ]),
      goCreat:function () {
        this.$router.push({path:'/Creat'})
      }
    },
    computed:{
      ...mapGetters([
        "stime"
      ])
    },
    mounted(){
      if(this.$parent.come != 0){

        var state,xmlhttp;
        console.log(this.stime);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
          if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            state = eval('('+xmlhttp.responseText+')')
          }else{
            //处理错误
          }
        }
        xmlhttp.open('GET','http://'+this.$store.state.serverIp+'/json/users.php?date='+this.stime,false);
        xmlhttp.send();
        this.$store.state.percent = state.percent;
        console.log(state)
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../assets/css/variable.less";

  #index{
    width:100%;
    height:100vh;
  }
  #btn{
    position: fixed;
    bottom:10%;
    overflow: hidden;
    left:0;
    right:0;
    width:60%;
    margin:0 auto;
  }
  .btnStyle{
    float: left;
    width:50%;
    color:#fff;
    text-align: center;
    padding:2vw;
  }
  #btn_left{
    background-color: #49aa83;
    border-radius: 20px 0 0 20px;
  }
  #btn_right{
    background-color: #eb6419;
    border-radius: 0 20px 20px 0;
  }
</style>
