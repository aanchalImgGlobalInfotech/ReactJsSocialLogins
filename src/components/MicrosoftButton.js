import React from 'react'
import { MicrosoftLoginButton } from 'react-social-login-buttons'
import { LoginSocialMicrosoft } from 'reactjs-social-login'
import './microsoftbutton.css'

const MicrosoftButton = () => {
    return (
        <LoginSocialMicrosoft
            isOnlyGetToken
            client_id={'58dc96fe-33da-46a2-8393-a0a514b1bfed'}
            redirect_uri={"http://localhost:3000/"}
            onLoginStart={()=>console.log('login start')}
            onResolve={({ provider, data }) => {
                // setProvider(provider)
                // setProfile(data)
                console.log('MS data', data )
            }}
            onReject={(err) => {
                console.log(err)
            }}
            className='microsoft-button'
        >
            <MicrosoftLoginButton />
        </LoginSocialMicrosoft>
    )
}

export default MicrosoftButton


// import React from "react";
// import MicrosoftLogin from "react-microsoft-login";

// export default function MicrosoftButton(props) {
//     const authHandler = (err, data) => {
//         console.log(err, data);
//     }

//     return (
//         <MicrosoftLogin clientId={'58dc96fe-33da-46a2-8393-a0a514b1bfed'} authCallback={authHandler} />
//     );
// };

