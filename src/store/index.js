/**
 * Created by zyz on 2018/1/4.
 */
import Vue from  'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// var state = {
//   newbi:'1'
// }
var state,xmlhttp;
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
    state = eval('('+xmlhttp.responseText+')')
  }else{
    state = {serverIp:0}
  }
  console.log(state)
}
//let serverIp = '/api';
let serverIp = 'http://192.168.1.102';
xmlhttp.open('GET',serverIp+'/json/users.php',false)
xmlhttp.send();

const getters = {
  stime(){
    var mydate = new Date();
    return mydate.getTime();
  }
}
const mutations = {
  go(state,s){
    console.log(s);
    s[0].push({path:'/'+s[1]});

  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})


