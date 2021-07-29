import { GoogleLogin } from 'react-google-login';
import { useDispatch } from "react-redux";
import { login } from '../../redux/actions/user'
import fetchGoogleTokens from './googleLogin';

const clientId = "410529829748-gu4huem6ecau5ni1mnn4fcq7rcmm9qmh.apps.googleusercontent.com";

function Login() {
  const dispatch = useDispatch()

  const onSuccess = (res) => {
    fetchGoogleTokens(res)
    dispatch(login(res))
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
