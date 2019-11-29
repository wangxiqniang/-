<!--  -->
<template>
	<div>
		<el-container>
			<!-- 左侧 -->
			<el-aside width="200px" height="100%">
				<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span slot="title">导航一</span>
						</template>

						<el-menu-item index="1-3">选项3</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
						
						<el-radio-button :label="false">展开</el-radio-button>
						<el-radio-button :label="true">收起</el-radio-button>
					</el-radio-group>
				</el-header>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
	</div> 
</template>

<script>
import HTTP from '../../server/index.js';
const _http = new HTTP();
import stor from '../../localestoring/local.js';
import axios from 'axios';
export default {
	data() {
		return {
			isCollapse: true
		};
	},
	methods: {},
	created() {
		let list = JSON.parse(stor.get('token'));
		if (list) {
			//   console.log(list.token);
			let obj = {
				token: list.token,
				jj: {}
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
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
};
</script>
<style scoped lang="scss">
	.el-container{
		width: 100%;
	}
.el-header {
	background: red;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
</style>
