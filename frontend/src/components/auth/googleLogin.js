import axios from "axios";

const googleLogin = (accesstoken) => {
	axios
		.post('http://127.0.0.1:8000/auth/convert-token', {
			token: accesstoken,
			backend: 'google-oauth2',
			grant_type: 'convert_token',
			client_id: 'GVOtLKb2fuZrWN9GKJBC2jqqPK3CNyEbJv3xE8Tz',
			client_secret: 'QN39kIE7YQs4IfKIbQNil1GHQnvjj9GsT9bz4bEtpBHtpewDdR6xEq3whVE19Rv1BrFjU1ZVq7fcnk7cEb8nCB2U19pAyjtd20MUY8ucYe3nsckUwGIEDbS7Pq18EBca',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default googleLogin;