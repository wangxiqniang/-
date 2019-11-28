<!--  -->
<template>
  <div class>123</div>
</template>

<script>
import HTTP from "../../server/index.js";
const _http = new HTTP();
import stor from "../../localestoring/local.js";
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    let list = JSON.parse(stor.get("token"));
    if (list) {
    //   console.log(list.token);
      let obj = {
        token: list.token
      };
      _http.list(obj).then(d => {
        console.log(d.data);
      });
      //       axios.post('http://www.wyunfei.com:8002/apis/system/pc/menu/user/button/list',{
      //       token:list.token
      //   }).then(d=>{
      //       console.log(d)
      //   })
    }
  }
};
</script>
<style  scoped>
</style>