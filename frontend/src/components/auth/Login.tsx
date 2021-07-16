import { useState } from 'react'
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './refreshToken';
import googleLogin from './googleLogin';

const clientId = "410529829748-gu4huem6ecau5ni1mnn4fcq7rcmm9qmh.apps.googleusercontent.com";

function Login() {

  const [name, setName] = useState('')

  const onSuccess = (res: any) => {
    refreshTokenSetup(res);
    googleLogin(res.accessToken)
    setName(res.profileObj.givenName + ' ' + res.profileObj.familyName)
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
  };

  return (
    <div>
      <h1>Hello {name}</h1>
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
