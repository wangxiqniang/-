import HTTP from '../utils/http.js'
const _http = new HTTP()
class Product {
	list(data) {
		return _http.request({
			type: 'post',
			url: '/apis/system/pc/menu/user/button/list',
			data: {
				token: data.token,
				jj: data.jj
			}
		})
	}
	//左侧列表
	right(data) {
		return _http.request({
			type: 'post',
			url: '/apis/system/pc/menu/user/list',
			data: {
				token: data.token,
				jj: data.jj
			}
		})
	}
	//订单详情
	add(data) {
		return _http.request({
			type: 'post',
			url: '/apis/course/pc/order/info/list',
			data: {
				token: data.token,
				jj: data.jj
			}
		})
	}
	//pc端设置
	pc(data){
		return _http.request({
			type: 'post',
			url: '/apis/course/pc/adv/list ',
			data: {
				token: data.token,
				jj: data.jj
			}
		})
	}
	//专区管理
	zhuanqu(data){
		return _http.request({
			type: 'post',
			url: '/apis/course/pc/zone/list ',
			data: {
				token: data.token,
				jj: data.jj
			}
		})
	}
}
export default Product
