// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

require('!style-loader!css-loader!less-loader!./assets/css/main.less');
require('!style-loader!css-loader!less-loader!./assets/css/animate.min.css');

import index from './pages/index.vue'
import Creat from './pages/Creat.vue'
import CreatSelect from './pages/CreatSelect.vue'
import CreatFinsh from './pages/CreatFinsh.vue'
import CreatSuccess from './pages/CreatSuccess.vue'
import ReviseBegin from './pages/ReviseBegin.vue'
import Revise from './pages/Revise.vue'
import Error from './pages/Error.vue'

Vue.config.productionTip = false
const router = new VueRouter({
  mode:'history',
  path:__dirname,
  routes:[
    {path:'/',component:index},
    {path:'/index',component:index},
    {path:'/Creat',component:Creat},
    {path:'/CreatSelect',component:CreatSelect},
    {path:'/CreatFinsh',component:CreatFinsh},
    {path:'/CreatSuccess',component:CreatSuccess},
    {path:'/ReviseBegin',component:ReviseBegin},
    {path:'/Revise',component:Revise},
    {path:'*',component:Error},
  ]
});



/* eslint-disable no-new */
var vm = new Vue({
  router,
  store,
  data:{
    examTime:'2017-06-17',
    preExamDay:'30',
    come:1
  },
  template:`
    <div>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
    </div>
  `,
  beforeCreate:function(){
   console.log( this.$store.state.newbi );
    if(this.$store.state.serverIp == '0'){
      //和服务终端连接
        router.push({path:'/error'});
    }
    //判断是否注册
    if(this.$store.state.newbi == 1){
        router.push({path:'/index'});
    }else{
        router.push({path:'/Creat'});
    }
  }

}).$mount('#app')
