<!--  -->
<template>
	<div class="hello_left">
		<el-container>
			<!-- 左侧 -->
			<el-aside style="width: -;height: -;">
				<el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" router >
					<template v-for="item in list">
						<el-submenu :index="item.id" v-if="item.name != '首页'">
							<template slot="title">
								<span slot="title">{{ item.name }}</span>
							</template>
							<el-menu-item-group v-for="v in item.children">
								<el-menu-item :index="v.path" v-if="v.children.length<=0">{{v.name}}</el-menu-item>
							</el-menu-item-group>
							<el-submenu :index="v.path" v-for="v in item.children">
								<span slot="title">{{v.name}}</span>
								<el-menu-item :index="y.path" v-for="y in v.children" v-if="v.children.length>0" >{{y.name}}</el-menu-item>
							</el-submenu>
						</el-submenu>
						
					</template>
				
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<div @click="isCollapse = !isCollapse">三</div>
					<div class="dash_img"><img src="../../assets/login.png" alt="" /></div>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
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
			list: []
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
				this.list = d.data.data.sysMenu;
			});
		}
	},
	methods: {}
};
</script>
<style scoped lang="scss">
.hello_left {
	width: 100%;
	height: 100%;
}
.dash_img {
	img {
		width: 30px;
		height: 30px;
	}
}
.el-container {
	width: 100%;
	min-height: 100%;
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
.el-container ul {
	min-height: 100%;
}
</style>
