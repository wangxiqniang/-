<!--  -->
<template>
	<div>
		<el-container>
			<!-- 左侧 -->
			<el-aside style="width: -;height: -;">
				<el-menu default-active="1-3-1" class="el-menu-vertical-demo"    :collapse="isCollapse" background-color="#545c64" unique-opene>
					<el-submenu :index="item.id" v-for="item in list"  >
						<template slot="title">
							<span slot="title">{{item.name}}</span>
						</template>

					<!-- 	<el-menu-item index="1-3" v-for="v in item.children">{{v.name}}</el-menu-item> -->
						 <el-submenu :index="v.id" v-for="v in item.children">
						      <span slot="title">{{v.name}}</span>
						      <el-menu-item index="1-2-1" v-for=" t in v.children">{{t.name}}</el-menu-item>
						    </el-submenu>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<div @click="isCollapse = !isCollapse">三</div>
					<div class="dash_img"><img src="../../assets/login.png" alt="" /></div>
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
			isCollapse: true,
			list:[]
		};
	},
	methods: {},
	created() {
		let list = JSON.parse(stor.get('token'));
		if (list) {
			let obj = {
				token: list.token,
				jj: {}
			};
			//订单详情
			_http.list(obj).then(d => {
				console.log(d.data);
			});
		}
		//订单详情
		if (list) {
			let obj = {
				token: list.token,
				jj: {}
			};
			_http.right(obj).then(d => {
				console.log(d.data.data.sysMenu);
				this.list=d.data.data.sysMenu
			});
		}
	},
	methods: {}
};
</script>
<style scoped lang="scss">
.dash_img {
	img {
		width: 30px;
		height: 30px;
	}
}
.el-container {
	width: 100%;
}
.el-header {
	background: white;
	display: flex;
	justify-content: space-between;
	padding-left: 20px 20px 20px 20px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 970px;
}
</style>
