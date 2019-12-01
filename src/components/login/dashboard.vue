<!--  -->
<template>
	<div class="hello_left">
		<el-container>
			<!-- 左侧 -->
			<el-aside style="width: -;height: -;">
				<el-menu default-active="$route.path" class="el-menu-vertical-demo" :collapse="isCollapse" router background-color="#545c64">
					<template v-for="item in list">
						<el-submenu :index="item.id" v-if="item.name != '首页'">
							<template slot="title">
								<span slot="title">{{ item.name }}</span>
							</template>

							<el-menu-item-group v-for="v in item.children" v-if="v.children.length <= 0">
								<el-menu-item :index="v.path" @click="push(v)">{{ v.name }}</el-menu-item>
							</el-menu-item-group>

							<el-submenu :index="v.path" v-for="v in item.children" v-if="v.children.length > 0">
								<span slot="title">{{ v.name }}</span>
								<el-menu-item :index="y.path" v-for="y in v.children" v-if="v.children.length > 0" @click="pus(y)">{{ y.name }}</el-menu-item>
							</el-submenu>
						</el-submenu>
					</template>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<div style="display: flex;justify-content: space-between;border-bottom: 1px solid #CCC;align-items: center;height: 60px;">
						<div @click="isCollapse = !isCollapse">三</div>
						<div class="dash_img"><img src="../../assets/login.png" alt="" /></div>
					</div>
					
					<div class="dash_li">
						<el-tag v-for="tag in options" :key="tag.name" :name="tag.path" closable  @close="handleClose(tag)">
						<router-link :to="tag.path" tag="span">{{tag.name}}</router-link>
						</el-tag>
					</div>
				</el-header>
				<el-main><router-view></router-view></el-main>
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
			list: [],
			options: []
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
	methods: {
		push(v) {
			console.log(this.options);
			if (this.options.length<=0) {
				this.options.push(v);
			}else{
				this.options.filter(res=>{
					// console.log(res)
					if(v.id!=res.id){
						this.options.push(v);
					}
				})
				}
			
		},
		pus(v) {
			if (this.options.length<=0) {
				this.options.push(v);
			}else{
				this.options.filter(res=>{
					// console.log(res)
					if(v.id!=res.id){
						this.options.push(v);
					}
				})
				}
		},
		handleClose(tag) {
			this.options.splice(this.options.indexOf(tag), 1);
		
		}
	}
};
</script>
<style scoped lang="scss">
.dash_li {
	span {
		margin-left: 20px;
	}
}
.dash_li {
	height: 50px;
	border-bottom: 1px solid #f0f0f0;
	display: flex;
	align-items: center;
}
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
	padding-left: 20px 20px 20px 20px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 970px;
}
.el-container ul {
	min-height: 100%;
}
.el-main {
	margin-top: 50px;
}
</style>
