import GoogleLogin from 'react-google-login';

const GoogleSocialAuth = () => {

    const googleResponse = (response: any) => {
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN WITH GOOGLE</h1>
      
        <GoogleLogin
          clientId="410529829748-gu4huem6ecau5ni1mnn4fcq7rcmm9qmh.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={googleResponse}
          onFailure={googleResponse}
        />
      </div>
    );
}

export default GoogleSocialAuth;