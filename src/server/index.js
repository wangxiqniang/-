import HTTP from '../utils/http.js'
const _http = new HTTP()
class Product {
    user() {
        return _http.request({
            type: 'post',
            url: '',
            data: {

            }
        })
    }
}
export default Product