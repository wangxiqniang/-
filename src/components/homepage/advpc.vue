<!--  -->
<template>
	<div class="">
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item label="广告标题"><el-input v-model="formInline.user" placeholder="审批人"></el-input></el-form-item>
			<el-form-item label="状态">
				<el-select v-model="formInline.region" placeholder="活动区域">
					<el-option label="正常" value="shanghai"></el-option>
					<el-option label="禁用" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item><el-button type="primary" icon="el-icon-search">查询</el-button></el-form-item>
			<el-form-item><el-button type="primary" icon="el-icon-refresh">重置</el-button></el-form-item>
			<el-form-item><el-button type="primary" icon="el-icon-search">添加</el-button></el-form-item>
		</el-form>
		<!-- 表格 -->
		<template>
			<el-table ref="singleTable" :data="list" highlight-current-row border style="width: 100%">
				<el-table-column type="index" width="50"></el-table-column>
				<el-table-column property="date" label="广告图片" width="120">
					<template slot-scope="scope">
						<img :src="scope.row.advImg" alt="">
					</template>
				</el-table-column>
				<el-table-column property="advTitle" label="广告标题/广告链接" width="190"></el-table-column>
				<el-table-column property="sort" label="排序"></el-table-column>
				<el-table-column property="address" label="状态">
					<el-switch
					  style="display: block"
					  v-model="value2"
					  active-color="#13ce66"
					  inactive-color="#ff4949"
					  active-text="禁用"
					  inactive-text="正常">
					</el-switch>

				</el-table-column>
				<el-table-column property="beginTime" label="开始时间"></el-table-column>
				<el-table-column property="endTime" label="结束时间"></el-table-column>
				<el-table-column property="address" label="操作">
					 <el-button type="danger" size="small">删除</el-button>
					  <el-button type="success" size="small">编辑</el-button>
				</el-table-column>
			</el-table>
		</template>
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
			formInline: {
				user: '',
				region: ''
			},
			list: [],
			value2:true
		};
	},
	methods: {},
	components: {},
	computed: {},
	created() {
		let list = JSON.parse(stor.get('token'));
		let obj = {
			token: list.token,
			jj: {}
		};
		_http.pc(obj).then(res => {
			console.log(res.data);
			this.list = res.data.data.list;
		});
	}
};
</script>
<style scoped lang="scss">
.el-input__inner {
	height: 30px !important;
}
</style>
