<template>
  <div id="Revise">
    <div class="xp text-size-sm">经验值：{{this.$store.state.xp}}</div>
    <div id="addxp">+1</div>
    <div class="padding-lg"> </div>
    <div>
      <div class="text-size-sm">请输入听到的单词</div>
      <div class="padding-md"> </div>
      <input type="text" id="form" :placeholder="form">
      <div class="padding-md"> </div>
        <div>
          {{meaning}}
        </div>
      <div class="padding-lg"> </div>
      <div id="sounddiv">
        <img src="../assets/images/sound.png" id="soundlogo" alt="">
        <audio id="bgMusic" autoplay="true">
          <source :src="nsrc" type="audio/mp3">
        </audio>
      </div>
    </div>
    <bottomBtn @click.native="nextform" btnValue="下一题" color="green" class="bottomBtn"></bottomBtn>
  </div>
</template>

<script>

  import bottomBtn from '../components/bottomBtn.vue'
  export default {
    name:'Revise',
    components:{bottomBtn},
    data(){
      return{
        form:'zip',
        meaning:'n.拉链',
        nsrc:'http://192.168.1.102/sound/zip.mp3'
      }

    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/css/variable.less";

  #Revise{
    padding:20px;
    #addxp{
      position: fixed;
      top:20px;
      right: 20px;
      color:@orange;
    }
    #form{
      width:100%;
      height: 55px;
      font-size:120%;
      border:0;
      border-bottom:1px solid @gray-light;
      outline: none;
      text-indent: 10px;
      color: @orange;
    }
    #sounddiv{
      width:100%;
      text-align: center;
    }
    #soundlogo{
      width:50%;
    }
  }
</style>
