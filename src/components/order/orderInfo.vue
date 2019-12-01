<template>
	<div class="">
		<div style="display: flex;width: 100%;">
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item label="审批人:"><el-input v-model="formInline.phone" placeholder="审批人"></el-input></el-form-item>
				<el-form-item label="审批人:"><el-input v-model="formInline.name" placeholder="审批人"></el-input></el-form-item>
				<div class="block">
					<span class="demonstration">默认</span>
					<el-date-picker  type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
				</div>
				<el-form-item label="订单状态">
					<el-select v-model="formInline.region" placeholder="订单状态">
						<el-option label="待支付" value="待支付"></el-option>
						<el-option label="支付成功" value="支付成功"></el-option>
						<el-option label="支付失败" value="支付失败"></el-option>
						<el-option label="已关闭" value="已关闭"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="订单编号:"><el-input v-model="formInline.state" placeholder="订单编号"></el-input></el-form-item>
				<el-form-item label="后台备注:"><el-input v-model="formInline.hou" placeholder="审批人"></el-input></el-form-item>
				<el-form-item label="讲师名称:"><el-input v-model="formInline.jiang" placeholder=""></el-input></el-form-item>
				<el-form-item label="购买渠道">
					<el-select v-model="pc" placeholder="购买渠道"><el-option label="PC端"></el-option></el-select>
				</el-form-item>
				<el-form-item label="支付方式">
					<el-select v-model="form" placeholder="订单状态">
						<el-option label="待支付" value="待支付"></el-option>
						<el-option label="支付成功" value="支付成功"></el-option>
					</el-select>
				</el-form-item>
				
			</el-form>
		</div>
		<div>
			  <el-button type="primary" icon="el-icon-search">重置</el-button>
			  <el-button type="info" icon="el-icon-refresh">重置</el-button>
		</div>
		<div>
			<template>
				<el-table ref="singleTable" border :data="list" highlight-current-row  style="width: 100%;">
					<el-table-column type="index" width="50"></el-table-column>
					<el-table-column property="orderNo" label="订单号" width="160px"></el-table-column>
					<el-table-column label="课程信息" width="120">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.courseName }}</span>
							<span style="margin-left: 10px;color: #409EFF;">[详情]</span>
						</template>
					</el-table-column>
					<el-table-column label="讲课信息" width="80px">
						<template slot-scope="scope">
							<span style="margin-left: 10px;color: #409EFF;">{{ scope.row.lecturerName }}</span>
							<span style="margin-left: 10px;color: #409EFF;">[详情]</span>
						</template>
					</el-table-column>
					<el-table-column label="用户信息" width="130px">
						<template slot-scope="scope">
							<span style="margin-left: 10px;color: #409EFF;">{{ scope.row.mobile }}</span>
							<span style="margin-left: 10px;color: #409EFF;">[详情]</span>
						</template>
					</el-table-column>
					<el-table-column  label="交易类型" width="160px"><el-tag type="success">线上支付</el-tag></el-table-column>
					<el-table-column  label="交易类型" width="120px">
						<template slot-scope="scope">
							<el-tag type="success">微信支付</el-tag>
							<span style="margin-left: 10px">【{{ scope.row.pricePaid }}】</span>
							
						</template>
					</el-table-column>
					<el-table-column   label="购买渠道" width="130px"><el-tag type="success">PC端</el-tag></el-table-column>
					<el-table-column  label="订单状态" width="130px"><el-tag type="success">支付成功</el-tag></el-table-column>
					<el-table-column  label="客户备注" width="130px"></el-table-column>
				
					<el-table-column property="payTime" label="支付时间" width="180px"></el-table-column>
						<el-table-column  label="操作" width="180px">
							 <el-button type="success">备注</el-button>
						</el-table-column>
				</el-table>
			</template>
		</div>
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
				phone: '',
				name: '',
				state: '',
				hou: '',
				jiang: ''
			},
			pc: '',
			form: {
				wei: '',
				zhi: ''
			},
			list: []
		};
	},
	created() {
		let list = JSON.parse(stor.get('token'));
		let obj = {
			token: list.token,
			jj: {}
		};
		//订单详情
		_http.add(obj).then(d => {
			console.log(d.data);
			this.list = d.data.data.list;
		});
	}
};
</script>
<style scoped lang="scss">
.block {
	display: inline-block;
}
.el-input {
	width: 180px;
	height: 20px;
}
.el-input__inner {
}
</style>
