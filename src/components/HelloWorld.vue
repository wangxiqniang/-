<template>
  <div class="app">
    <div class="header">
      <img src="../assets/login.png" alt class="logo" />
      <div class="login">
        <div class="icon">
          <i class="el-icon-user"></i>
        </div>
        <h2>领课教育系统-开源版</h2>
        <div class="as">
          <i class="el-icon-user"></i>
          <input type="text" v-model="zh"/>
        </div>
        <div class="pass">
          <i class="el-icon-user"></i>
          <input type="password" v-model="pass" />
        </div>
        <div class="login1" @click="login">登录</div>
      </div>
    </div>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>


<script>
import axios from "axios";
import stor from '../localestoring/local.js'
export default {
  data() {
    return {
        zh:"",
        pass:''
    };
  },
   methods:{
    login(){
      console.log("111")
      axios.post('http://www.wyunfei.com:8002/apis/user/pc/api/user/login/password',{
        mobile:this.zh,
        password:this.pass,
       clientId:"lkb65617f842ad4c37895a733b8de43cbb"
      }).then(d=>{
          stor.set('token',JSON.stringify(d.data.data))
        console.log(d)
        if (d.data.code == 200) {
            this.$router.push({path:'/login'})
        }

      })
    }
  }
};
</script>
<style lang="scss">
.app {
  background: #93defe;
  width: 100%;
  height: 100%;
  .logo {
    float: left;
    position: fixed;
    left: 200px;
    top: 150px;
  }
  .login {
    width: 460px;
    height: 430px;
    background: #fff;
    border-radius: 10px;
    float: right;
    margin-right: 240px;
    margin-top: 150px;
    position: relative;
    .icon {
      position: absolute;
      width: 124px;
      height: 124px;
      border-radius: 50%;
      border: 5px solid #93defe;
      background: #fff;
      margin-top: -60px;
      margin-left: 36%;
      text-align: center;
      i {
        font-size: 70px;
        line-height: 120px;
        color: #91ddfe;
      }
    }
    h2 {
      text-align: center;
      margin-top: 110px;
      color: #3d3f40;
      font-size: 30px;
    }
  }
}
.as {
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid darkgray;
  margin-top: 20px;
  background: #ccc;
}
.pass {
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid darkgray;
  background: #ccc;
}
.login1 {
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background: #409eff;
  border-radius: 5px;
}
input{
    list-style: none;
    border: none;
    outline: none;
    background: #ccc;
    width: 80%;
}
</style>