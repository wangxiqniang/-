<template>
  <div class="hello">
  <div>
    <div>
      <input type="text" v-model="zh">
    </div>
    <div>
    <input type="password" v-model="pass" >
    </div>
    <button @click="login"> 提交</button>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  data () {
    return {
      zh:'',
      pass:''
    }
  },
  methods:{
    login(){
      console.log("111")
      axios.post('http://www.wyunfei.com:8002/apis/user/pc/api/user/login/password',{
        mobile:this.zh,
        password:this.pass,
       clientId:"lkb65617f842ad4c37895a733b8de43cbb"
      }).then(d=>{
        console.log(d)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
