import axios from "axios";


const googleLogin = async (accesstoken: string) => {
    // console.log("googleLogin", accesstoken)
    let res = await axios.post(
      "http://localhost:8000/dj-rest-auth/google/",
      {
        access_token: accesstoken,
      }
    );
    return await res.status;
  };

export default googleLogin;