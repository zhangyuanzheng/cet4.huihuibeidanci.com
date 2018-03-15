<template>
  <div id="speed">
     <div class="tempText"> {{percentText}}</div>
    <div id="main">
      <div id="da" v-show="da"></div>
      <div id="xiao" v-show="xiao"></div>
      <div id="hui" ></div>
      <div id="circlesText">{{percentTextSay}}</div>
      <div id="circles">
          <div id="percent" class="bg-master-gradient"></div>
          <!--<span>{{percentText}}</span>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'speed',
    data(){
      return {
        da: true,
        xiao: true,
        percentTextSay: '已完成',
        percent: this.$store.state.percent
      }
    },
    computed:{
      percentText(){
        if(this.percent == 0){
          this.percentTextSay = '从这里开始'
        }
        return this.percent + '%';
      }
    },
    methods:{
      change(){
        if(this.percent<50){
          var xiao = parseInt(180 - this.percent*1.8);
          document.getElementById('xiao').style.transform='rotate(-'+xiao+'deg)';
        }else{
          var da = parseInt((this.percent-50)*3.6);
          document.getElementById('xiao').style.background='#90d5b9';
          document.getElementById('xiao').style.transform='rotate(-180deg)';
          document.getElementById('da').style.transform='rotate('+da+'deg)';
        }
      }
    },
    mounted(){
      this.change()
    }

  }

</script>

<style lang="less" scoped>
  @import "../assets/css/variable.less";
  #main{
    width:180px;
    margin:0 auto;
    position: relative;
  }
  .tempText{
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    z-index: 6;
    top: 35%;
    color: #fff;
  }
  #da{
    position: absolute;
    z-index: 4;
    width:180px;
    height: 180px;

    transform: rotate(20deg);
    clip:rect(0,90px,180px,0px);
    border-radius:180px ;
    background-color: #f4f4f4;
  }
  #xiao{
    position: absolute;
    z-index: 5;
    width:180px;
    height: 180px;
    transform: rotate(90deg);
    clip:rect(0,90px,180px,0px);
    border-radius:180px ;
    background-color: #f4f4f4;
  }
  #circlesText{
    position: absolute;
    z-index: 20;
    color:#fff;
    margin:0 auto;
    line-height:210px;
    width:180px;
    text-align:center;
  }
  #circles{
    width: 180px;
    height: 180px;
    padding:13px;
    border-radius: 155px;
    border:2px solid #90d5b9;
    background-color: #90d5b9;
  }
  #percent{
    width: 150px;
    height: 150px;
    border-radius:150%;
    line-height: 150px;
    text-align: center;
    color:#fff;
    font-size:150%;
    position: absolute;
    z-index: 5;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .bg-master-gradient{
    background: #49aa83;
  }
</style>
