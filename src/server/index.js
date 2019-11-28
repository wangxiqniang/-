import HTTP from '../utils/http.js'
const _http = new HTTP()
class Product {
    list(data) {
        return _http.request({
            type: 'post',
            url: '/apis/system/pc/menu/user/button/list',
            data: {
                token:data.token
            }
        })
    }
}
export default Product