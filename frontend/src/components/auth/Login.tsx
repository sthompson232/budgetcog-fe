import { GoogleLogin } from 'react-google-login';
import { useDispatch } from "react-redux";
import { login } from '../../redux/actions/auth'
import googleLogin from './googleLogin';

const clientId = "410529829748-gu4huem6ecau5ni1mnn4fcq7rcmm9qmh.apps.googleusercontent.com";

function Login() {
  const dispatch = useDispatch()

  const onSuccess = (res: any) => {
    googleLogin(res.accessToken)
    dispatch(login(res))
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
