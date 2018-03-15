<template>
  <div id="Revise">
    <div class="xp text-size-sm">经验值：{{this.$store.state.xp}}</div>
    <div id="addxp" v-if="xpshow" class="animated pulse text-size-lg">+1</div>
    <div class="padding-lg"> </div>
    <div>
      <div class="text-size-sm">请输入听到的单词</div>
      <div class="padding-md"> </div>
      <input type="text" id="form" :placeholder="form" v-model="formWrite">
      <div class="padding-md"> </div>
        <div>
          {{meaning}}
        </div>
      <div class="padding-lg"> </div>
      <div id="sounddiv">
        <img src="../assets/images/sound.png" id="soundlogo" alt="">
        <!--<audio id="bgMusic" autoplay="true">-->
          <!--<source :src="nsrc" type="audio/mp3">-->
        <!--</audio>-->
      </div>
    </div>
    <bottomBtn @click.native="check" btnValue="下一题" color="green" class="bottomBtn"></bottomBtn>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vueResource from 'vue-resource'
  Vue.use(vueResource)

  import bottomBtn from '../components/bottomBtn.vue'
  export default {
    name:'Revise',
    components:{bottomBtn},
    data(){
      return{
        form:'zip',
        meaning:'n.拉链',
        formWrite:'',
        xpshow:false,
        num:5
       // nsrc:'http://192.168.1.102/sound/zip.mp3'
      }
    },
    mounted(){
      this.getform();
    },
    methods:{
      check(){
        if(this.form == this.formWrite){
          this.xpshow = true;
          this.getform();
          this.$store.state.xp = parseInt(this.$store.state.xp)+1;
          this.formWrite = '';

          //post提交给后台
          this.$http.post('http://'+this.$store.state.serverIp
            +'/json/users.php',{xp:this.$store.state.xp}).then(
            function(response){
              if(response.data=='1'){}
            },
            function(aaaa){
              this.$router.push({path:'/Error'})
            }
          ),

          setTimeout(()=>{
            this.xpshow = false;
          },2000)
        }else{
          //跳到单词拼写错误页面
          this.$router.push({path:'/'});
        }
      },
      getform(){
        var xmlhttp,state,me;
        me = this;
     //   console.log(this);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {

          //  console.log(xmlhttp.readyState,xmlhttp.status );
          if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            state = eval('('+ xmlhttp.responseText +')');
           // console.log(state);
          }else{
           // console.log(this)
        //    me.$router.push({path:'/error'});
          }
        }
        let serverIp = 'http://192.168.1.102';
        xmlhttp.open('GET',serverIp+'/json/Revise.php',false);
        xmlhttp.send();
        this.form = state.form;
        this.meaning = state.meaning;
       // this.nsrc= 'http://192.168.1.102/sound/'+state.form+'.mp3'
        this.num--;

        this.num<=0 && this.$router.push({path:'/index'});
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
