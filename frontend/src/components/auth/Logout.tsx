import { GoogleLogout } from 'react-google-login';
import { useDispatch } from "react-redux";
import { logout } from '../../redux/actions/auth'

const clientId = "410529829748-gu4huem6ecau5ni1mnn4fcq7rcmm9qmh.apps.googleusercontent.com";

function Logout() {
  const dispatch = useDispatch()
  
  const onSuccess = () => {
    console.log('Logout made successfully');
    dispatch(logout())
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;