import { GoogleLogin } from 'react-google-login';
import { useDispatch } from "react-redux";
import { login } from '../../redux/actions/user'
import googleLogin from './googleLogin';
import { axiosGet } from '../../utils/axios'
import { useHistory } from 'react-router-dom';


const clientId = "410529829748-gu4huem6ecau5ni1mnn4fcq7rcmm9qmh.apps.googleusercontent.com";

function Login() {
  const dispatch = useDispatch()
  let history = useHistory()

  function loginDispatch(res) {
    console.log(res)
    axiosGet('user-profile/').then(response => dispatch(login(res, response.data)))
  }

  const onSuccess = (res) => {
    googleLogin(res, loginDispatch)
    // history.push('/dashboard')
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
