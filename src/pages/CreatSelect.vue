<template>
  <div id="CreatSelect">
    <div>
      <div class="text-text padding-md">
        <div class="padding-md"></div>
        <div class="text-size-md">2017年</div>
        <div class="padding-sm"></div>
        <div class="text-size-lg-note">
          选择其他考试时间 <span class="text-green" @click="moreTime()">更多考试时间</span>
        </div>
        <div class="padding-lg"></div>
        <div class="radio-lg">
          <ul>
            <li class="radiolg active" id="data-2017-06-17" @click="dateSel('data-2017-06-17')">
              <div class="context" >6月17日</div>
            </li>
            <li class="radiolg noactive" id="data-2017-12-16" @click="dateSel('data-2017-12-16')">
              <div class="context" >12月16日</div>
            </li>
            <div v-show="radioMore">
              <li class="radiolg noactive" id="data-2018-06-17" @click="dateSel('data-2018-06-17')">
                <div class="context" >6月17日</div>
              </li>
              <li  class="radiolg noactive" id="data-2018-12-16" @click="dateSel('data-2018-12-16')">
                <div class="context" >12月16日</div>
              </li>
              <li class="radiolg noactive" id="data-2019-06-17" @click="dateSel('data-2019-06-17')">
                <div class="context" >6月17日</div>
              </li>
              <li class="radiolg noactive" id="data-2019-12-16" @click="dateSel('data-2019-12-16')">
                <div class="context" >12月16日</div>
              </li>
            </div>
          </ul>
        </div>
        <div class="clear padding-sm"></div>
        <div class="text-size-lg-note">
           预备备考时间
        </div>
        <div class="padding-sm"></div>
        <div class="radio-md">
          <ul>
            <li class="radiomd active" id="data-30" @click="preExamDay('data-30')">
              <div class="context" >30天</div>
            </li>
            <li class="radiomd noactive" id="data-60" @click="preExamDay('data-60')">
              <div class="context" >60天</div>
            </li>
            <li class="radiomd noactive" id="data-90" @click="preExamDay('data-90')">
              <div class="context" >90天</div>
            </li>
          </ul>
          <div class="clear"></div>
        </div>

      </div>
      <bottomBtn @click.native="toCreatFinsh" btnValue="开始吧" color="orange" class=""></bottomBtn>
    </div>
  </div>
</template>

<script>
  import bottomBtn from '../components/bottomBtn.vue'
  export default {
    name:'CreatSelect',
    data:function(){
      return{
        radioMore:false
      }
    },
    components:{bottomBtn},
    methods:{
      toCreatFinsh:function () {
        this.$router.push({path:'/CreatFinsh'})
      },
      moreTime:function(){
        if(this.radioMore == true){
          this.radioMore = false;
        }else{
          this.radioMore = true;
        }
      },
      dateSel:function (id) {
        var obj = document.getElementsByClassName('radiolg');
        for(var i=0;i<obj.length;i++){
          obj[i].setAttribute('class','radiolg noactive');
        }
        document.getElementById(id).setAttribute('class','radiolg active');
        this.$parent.examTime = id.replace(/data-/g,'');
        console.log(this.$parent.examTime);
      },
      preExamDay:function (id) {
        var obj = document.getElementsByClassName('radiomd');
        for(var i=0;i<obj.length;i++){
          obj[i].setAttribute('class','radiomd noactive');
        }
        document.getElementById(id).setAttribute('class','radiomd active');
        this.$parent.preExamDay = id.replace(/data-/g,'');
        console.log(this.$parent.preExamDay);
      },
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/css/main.less";

  #CreatSelect{
    font-size:90%;
  }
  .radio-lg{
    li{
        float: left;
        width:40%;
        padding:5px;
        margin-right:15px;
        margin-bottom:20px;
    }
    .active{
        border:1px solid @green;
        div{
            background-color: @green;
            height:100px;
            text-align: center;
            line-height: 100px;
            color: @white;
        }
    }
    .noactive{
        border:1px solid transparent;
        div{
            background-color: @gray-lighter;
            height:100px;
            border:1px solid @gray-light;
            text-align: center;
            line-height: 100px;
            color: @gray-darker;
        }
    }
  }
  .radio-md{
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
        width:60px;
        height:60px;
        text-align: center;
        line-height: 60px;
        color: @white;
      }
    }
      .noactive{
        border:1px solid transparent;
        div{
          background-color: @gray-lighter;
          width:60px;
          height:60px;
          border:1px solid @gray-light;
          text-align: center;
          line-height: 60px;
          color: @gray-darker;
        }
    }
  }
</style>
