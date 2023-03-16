import React from 'react'
import { TwitterLoginButton } from 'react-social-login-buttons'
import { LoginSocialTwitter } from 'reactjs-social-login'
import './twitterbutton.css'

const TwitterButton = ({ user, setUser }) => {

  return (
    <LoginSocialTwitter
      isOnlyGetToken
      client_id={process.env.REACT_APP_TWITTER_CLIENT_ID}
      redirect_uri={'https://75b5-2401-4900-1c1b-a4e0-1cf-c517-3041-2a52.in.ngrok.io/'}
      // onLoginStart={onLoginStart}
      onResolve={({ provider, data }) => {
        console.log(data)
        // setProvider(provider)
        // setProfile(data)
      }}
      onReject={(err) => {
        console.log(err)
      }}
      className="twitter-button"
    >
      <TwitterLoginButton />
    </LoginSocialTwitter>
  )
}

export default TwitterButton

// import React from "react";
// import TwitterLogin from "react-twitter-oauth";

// export default function TwitterButton({ user, setUser }) {
//     const authHandler = (err, data) => {
//         console.log(err, data)
//     };

//     return (
//         <TwitterLogin
//             authCallback={authHandler}
//             consumerKey={"MQf93eOynPQxsbdLUvxPfB8yT"}
//             consumerSecret={"jFsfMWRBTKKrW6QTcTESkPEuRcMa3XS0Is5skH39eIxdkkZ6Bk"}
//             requestTokenUrl={'https://api.twitter.com/oauth/request_token'}
//             accessTokenUrl={'https://api.twitter.com/oauth/access_token'}
//         />
//     );
// };


// import axios from "axios";
// import React, { useState } from "react";
// import ReactTwitterLogin from "react-twitter-login";
// export default function TwitterLogin() {
//   const [tiw, setTiw] = useState()

//   const authHandler = (error, data) => {
//     // if (error) return console.error(error);
//     // console.log('res', data);

//     // axios.get(`https://api.twitter.com/1.1/users/show.json?screen_name=${data.screen_name}`)
//     //   .then((res) => {
//     //     console.log('res', res)
//     //   })
//   }
//   return (
//     <ReactTwitterLogin
//       authCallback={authHandler}
//       consumerKey="MQf93eOynPQxsbdLUvxPfB8yT"
//       consumerSecret="jFsfMWRBTKKrW6QTcTESkPEuRcMa3XS0Is5skH39eIxdkkZ6Bk"
//       // consumerKey="N2g5dHlvMWJWTnZhbVRBQk1fcHI6MTpjaQ"
//       // consumerSecret="hYhXVsZ5QJSkQpaTkXT1HkKLGn6nwELvHLIEAKI8fZrLVTyVM1"
//       callbackUrl="http://localhost:3000/"
//     // callbackUrl="https://75b5-2401-4900-1c1b-a4e0-1cf-c517-3041-2a52.in.ngrok.io/"
//     />
//   );
// }
