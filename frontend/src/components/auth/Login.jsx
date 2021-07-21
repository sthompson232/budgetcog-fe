import { GoogleLogin } from 'react-google-login';
import { useDispatch } from "react-redux";
import { login } from '../../redux/actions/auth'
import googleLogin from './googleLogin';
import { axiosGet } from '../../utils/axios'

const clientId = "410529829748-gu4huem6ecau5ni1mnn4fcq7rcmm9qmh.apps.googleusercontent.com";

function Login() {
  const dispatch = useDispatch()

  async function loginDispatch(res) {
    let response = await axiosGet('color-selector/')
    let color = response.data
    dispatch(login(res, color))
  }

  const onSuccess = (res) => {
    googleLogin(res.accessToken)
    loginDispatch(res)
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
