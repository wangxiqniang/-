import Axios from 'axios'
import Qs from 'qs'
import config from '../conlig/index'
class HTTP {
	request(params) {
		return new Promise((resolve, reject) => {
			Axios({
				method: params.type,
				url: config.baseUrl + params.url,
				data: Qs.stringify(params.data),
				headers: {
				Authorization: params.data.token
				},
				
			}).then(res => {
				resolve(res)
			})


		})
	}
}
export default HTTP
