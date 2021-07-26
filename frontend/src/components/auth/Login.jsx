import { GoogleLogin } from 'react-google-login';
import { useDispatch } from "react-redux";
import { login } from '../../redux/actions/user'
import googleLogin from './googleLogin';
import { axiosGet } from '../../utils/axios'
import { Redirect } from 'react-router-dom'

const clientId = "410529829748-gu4huem6ecau5ni1mnn4fcq7rcmm9qmh.apps.googleusercontent.com";

function Login() {
  const dispatch = useDispatch()

  async function loginDispatch(res) {
    let response = await axiosGet('user-profile/')
    console.log("response", response)
    let profile = response.data
    dispatch(login(res, profile))
  }

  const onSuccess = (res) => {
    googleLogin(res.accessToken)
    loginDispatch(res);
    <Redirect to={{ pathname: '/dashboard' }} />
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  return (
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
  );
}

export default Login;
