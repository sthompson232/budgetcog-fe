import axios from "axios";
import { url } from '../../url'
import { CLIENT_ID, CLIENT_SECRET } from "../../url";

const googleLogin = (res, loginDispatch) => {
	axios
		.post(`${url}/auth/convert-token`, {
			token: res.accessToken,
			backend: 'google-oauth2',
			grant_type: 'convert_token',
			client_id: CLIENT_ID,
			client_secret: CLIENT_SECRET,
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
			console.log("tokens set in local storage")
		})
		.then(() => loginDispatch(res))
};

export default googleLogin;