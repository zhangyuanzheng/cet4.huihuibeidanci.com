<template>
  <div id="CreatFinsh">
    <header-lg bigTitle="CET-4" noteTitle="四级单词记忆管理"></header-lg>
    <div class="padding-md">
      <div class="text-size-lg">真实姓名</div>
      <div>
        <input type="text" class="input" v-model="name">
      </div>
      <div class="padding-md"></div>

      <div class="text-size-lg" >
        注册手机号</div>
      <div>
        <input type="text"  class="input" v-model="mobile"
               onkeyup="this.value = this.value.replace(/\d/g,'')">
      </div>
      <div class="padding-md"></div>
      <div class="text-size-lg">性别</div>
      <div class="radio-sm">
        <ul>
          <li class="radiosm active" id="data-0" @click="sexSel('data-0')">
            <div class="context" >男</div>
          </li>
          <li class="radiosm noactive" id="data-1" @click="sexSel('data-1')">
            <div class="context" >女</div>
          </li>
        </ul>
        <div class="clear"></div>
      </div>
    </div>



    <bottomBtn @click.native="toCreatSuccess" btnValue="完成注册" color="orange" class="bottomBtn"></bottomBtn>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vueResource from 'vue-resource'
  Vue.use(vueResource)

  import headerLg from '../components/header-lg.vue'
  import bottomBtn from '../components/bottomBtn.vue'
  export default {
    name:'CreatFinsh',
    data:function(){
      return{
        mobile:'1333333344',
        name:'zyz',
        sex:'1'
      }
    },
    components:{headerLg,bottomBtn},
    methods:{
      sexSel:function (id) {
        var obj = document.getElementsByClassName('radiosm');
        for(var i=0;i<obj.length;i++){
          obj[i].setAttribute('class','radiosm noactive');
        }
        document.getElementById(id).setAttribute('class','radiosm active');
       this.sex = id.replace(/data-/g,'');
        console.log(this.sex)
      },
      toCreatSuccess:function () {
        console.log();
        if(this.name !='' && this.mobile != ''){
          var formData = new FormData();
          formData.append('name',this.name)
          formData.append('mobile',this.mobile)
          formData.append('sex',this.sex)
          formData.append('examTime',this.$parent.examTime)
          formData.append('preExamDay',this.$parent.preExamDay)
          this.$http.post('http://'+this.$store.state.serverIp
            +'/json/post_reguser.php',formData).then(
            function(response){
              if(response.data=='1')
                console.log('toCreatSuccess')
                this.$router.push({path:'/CreatSuccess'})
            },
            function(aaaa){
              this.$router.push({path:'/Error'})
            }
          )
        }
      }
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
