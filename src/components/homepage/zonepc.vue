<!--  -->
<template>
	<div class="">
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item label="专区名称"><el-input v-model="formInline.user"></el-input></el-form-item>
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
				<el-table-column property="zoneDesc" label="专区名称" width="220"></el-table-column>
				<el-table-column property="zoneName" label="专区描述" width="220"></el-table-column>
				<el-table-column property="sort" label="排序"></el-table-column>
				<el-table-column label="状态"></el-table-column>
				<el-table-column label="操作">
					<el-button type="danger" size="small">删除</el-button>
					<el-button type="success" size="small">编辑</el-button>
					<el-button type="success" size="small">专区课程</el-button>
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
			value2: true
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
		_http.zhuanqu(obj).then(res => {
			console.log(res.data);
			this.list = res.data.data.list;
		});
	}
};
</script>
<style scoped></style>
