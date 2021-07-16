import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../redux/actions/auth'
import { refreshTokenSetup } from './refreshToken';
import googleLogin from './googleLogin';

const clientId = "410529829748-gu4huem6ecau5ni1mnn4fcq7rcmm9qmh.apps.googleusercontent.com";

function Login() {
  const dispatch = useDispatch()
  let name = useSelector((state: any) => {return state.user.fullName})
  let image = useSelector((state: any) => {return state.user.imageUrl})
  let email = useSelector((state: any) => {return state.user.email})

  const onSuccess = (res: any) => {
    refreshTokenSetup(res);
    googleLogin(res.accessToken)
    localStorage.setItem('access_token', res.accessToken) 
    dispatch(login(res))
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
  };

  return (
    <div>
      <h1>Hello {name}</h1>
      <h2>Your email address is {email}</h2>
      <img src={image} alt="" />
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
