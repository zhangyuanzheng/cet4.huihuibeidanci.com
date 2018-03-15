<template>
  <div id="creat">
    <div>
      <header-lg bigTitle="CET-4" noteTitle="四级单词记忆管理"></header-lg>
      <div class="text-text padding-md">
        <p class="text-size-md">Hi，</p>
        <p class="text-indent">打完的赴日个人打完的赴日个人打完的打完的赴日个人打完的赴日个人打完的打完的赴日个人打完的赴日个人打完的打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人。</p>
        <p class="text-indent">打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人打完的赴日个人。</p>
        <p class="text-align-right">张张</p>
      </div>
      <bottomBtn @click.native="go([$router,'CreatSelect'])" btnValue="创建计划" color="orange" class="bottomBtn"></bottomBtn>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import headerLg from '../components/header-lg.vue'
  import bottomBtn from '../components/bottomBtn.vue'
  export default {
    name:'creat',
    components:{headerLg,bottomBtn},
    methods:{
      // toCreatSelect:function () {
      //   this.$router.push({path:'/CreatSelect'})
      // },
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
