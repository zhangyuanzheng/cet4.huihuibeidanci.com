<template>
  <div id="Plan">
    <div id='bar'>
      <span class='text-size-lg'>{{now}} /</span>{{allcount}}
    </div>
    <div id='nform'>{{nform}}</div>
    <div id='nipa'>[{{nipa}}]</div>
    <div id='nmeaning'>{{nmeaning}}</div>

    <div id='notic'>学习模式  </div>
    <div id='sounddiv' >
      <img src="../assets/images/sound.png" id='soundlogo'  >
    </div>
    <div id='autoplaydiv' v-show='autoplaydiv' @click="beginStudy">
      <div class='text-size-lg text-align-center'>学习模式</div>  
      <div class='text-size-lg text-align-center'>单词会自动播放</div>  
      <div class='text-size-lg text-align-center'>请用心记忆</div>  
      <div class='text-size-lg text-align-center'>GO</div>  
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import headerLg from "../components/header-lg.vue";
import bottomBtn from "../components/bottomBtn.vue";
export default {
  name: "Plan",
  data() {
    return {
      nform: "",
      nipa: "",
      nmeaning: "",
      now: 0,
      allcount: 0,
      autoplaydiv: true,
      forms:[],
      returnplay:0,
      timer:null
    };
  },
  methods: {  
    beginStudy(){
        this.autoplaydiv = false  
        this.playreturn ();
    },
    playreturn(){
      this.nform = this.forms[this.now].form;
      this.nipa = this.forms[this.now].ipa;
      this.nmeaning = this.forms[this.now].meaning;
      this.now++;

      this.timer = setInterval(()=>{
        if(this.returnplay <= 3){
          this.returnplay++;
          console.log('播放了一次');
          (this.returnplay == 3) && clearInterval(this.timer);
        }  
      },1000)
    },
    
  },
  watch:{
    returnplay(val,oldval){
      console.log(val)
      if(val == 3){
          if(this.now < this.allcount){
            this.playreturn();
            this.returnplay = 0;
          }else{
            this.$router.push({path:'/PlanShow'})
          }

      }
    }
  },
  beforeMount(){
    this.forms = []
  },
  mounted(){
    //post提交给后台
    this.$http.get('http://'+this.$store.state.serverIp
      +'/json/plan.php').then(
      function(response){
        var formsTemp = eval(response.bodyText);
        console.log(response);
        for(var i in formsTemp){
          this.forms.push(formsTemp[i]);
        }
        this.allcount = this.forms.length
      },
      function(aaaa){
        this.$router.push({path:'/Error'})
      }
    )
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/variable.less";

#Plan {
  #bar {
    position: fixed;
    right: 20px;
    top: 20px;
  }
  #nform {
    position: fixed;
    left: 30px;
    top: 100px;
    font-size: 300%;
    color: red;
  }
  #nipa {
    position: fixed;
    left: 30px;
    top: 160px;
    font-size: 100%;
    color: #ddd;
  }
  #nmeaning {
    position: fixed;
    left: 30px;
    top: 200px;
    font-size: 120%;
    color: #666;
  }
  #notic {
    position: fixed;
    left: 20px;
    bottom: 20px;
    font-size: 75%;
  }
  #sounddiv {
    position: fixed;
    right: 20px;
    bottom: 20px;
    img {
      width: 50px;
    }
  }
  #autoplaydiv {
    position: fixed;
    width: 100%;
    z-index: 9;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding-top: 50px;
    height: 100%;
    div {
      margin-bottom: 10px;
    }
  }
}
</style>
