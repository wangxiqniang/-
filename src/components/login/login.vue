<!--  -->
<template>
  <div class>亲炙而发愁挖而非求挖坟去潍坊</div>
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
    
      let obj = {
        token: list.token
      };
	  console.log(obj.token)
      _http.list(obj).then(d => {
        console.log(d.data);
      });
    }
  }
};
</script>
<style  scoped>
</style>