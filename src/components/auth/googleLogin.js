import axios from "axios";
import { url } from '../../url'

const googleLogin = (res, loginDispatch) => {
	axios
		.post(`${url}/auth/convert-token`, {
			token: res.accessToken,
			backend: 'google-oauth2',
			grant_type: 'convert_token',
			client_id: 'n8ybXtVncyyicPxwl3sB9IafpbPlf7PZkHgm7oHe',
			client_secret: 'wLvk1IRz67wnMSLEKujmktDFgT2Hp3s9LfZk6qC3VeUAsWFPHRv2XzCq2JPDLFYSblJsseGRzwhYXWlUdt1L638LqfmK9UeOygpX4sOtg9Wr7gNQhX4MCB5RoB1Nf5vJ',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
			console.log("tokens set in local storage")
		})
		.then(() => loginDispatch(res))
};

export default googleLogin;