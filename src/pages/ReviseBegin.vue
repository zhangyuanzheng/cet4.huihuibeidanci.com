<template>
  <div id="ReviseBegin">
    <div>
      <face></face>
      <div class="text-text padding-md">
        <p class="text-size-md">复习规则：</p>
        <p class="text-indent">复习规则复习规则完的赴日个人打完的赴日个人。</p>
        <p class="text-indent">复习规则复习规则打完的的赴日个人打完的赴日完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人。</p>
        <p class="padding-lg"></p>
        <p class="text-align-right">
          <input type="checkbox" id="checkBox" v-model="readReviseRule">
          以后不再提示
        </p>
      </div>
      <bottomBtn @click.native="go([$router,'Revise'])" btnValue="开始吧" color="orange" class="bottomBtn"></bottomBtn>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import headerLg from '../components/header-lg.vue'
  import bottomBtn from '../components/bottomBtn.vue'
  import face from '../components/face.vue'
  export default {
    name:'ReviseBegin',
    components:{headerLg,bottomBtn,face},
    data(){
      return{
          readReviseRule:false
      }
    },
    methods:{
      // toCreatSelect:function () {
      //   this.$router.push({path:'/CreatSelect'})
      // },
      ...mapMutations([
        "go"
      ])
    },
    watch:{
      readReviseRule(newVal){
        console.log(newVal);
        var formData = new FormData();
        if(newVal == true){
          formData.append('readReviseRule',1);
          this.$http.post("http://"+this.$store.state.serverIp+'/json/updateuser.php',formData).then(
            function (response) {
              console.log(response.data);
              if(response.data == 0){
                this.$router.push({path:'/Error'});
              }
            },
            function (error) {
              this.$router.push({path:'/Error'});
            }
          )
        }else{

        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/css/variable.less";

  #ReviseBegin{
    font-size:90%;
  }
</style>
