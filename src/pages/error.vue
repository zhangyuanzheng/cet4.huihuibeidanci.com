<template>
  <div id="error">
    <div>
      <header-lg bigTitle="404" noteTitle="找不到页面"></header-lg>
      <div class="text-text padding-md">
        <p class="text-size-md">Error</p>

      </div>
      <bottomBtn @click.native="go([$router,'index'])" btnValue="返回首页" color="orange" class="bottomBtn"></bottomBtn>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import headerLg from '../components/header-lg.vue'
  import bottomBtn from '../components/bottomBtn.vue'
  export default {
    name:'error',
    components:{headerLg,bottomBtn},
    methods:{
      ...mapMutations([
        "go"
      ])
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/css/variable.less";

  #creat{
    font-size:90%;
  }
</style>
