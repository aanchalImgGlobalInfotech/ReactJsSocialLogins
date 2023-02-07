import React from 'react'
import { InstagramLoginButton } from 'react-social-login-buttons'
import { LoginSocialInstagram } from 'reactjs-social-login'
import './instagrambutton.css'


const InstagramButton = ({ user, setUser }) => {

    const onResolve = (response) => {
        console.log('from fb login', response.data)
        setUser(() => ({ name: response.data.name }))

    }

    return (
        <LoginSocialInstagram
            isOnlyGetToken
            client_id={880291606357501}
            client_secret={'dfc81e40bc6a4f2472cb6480d62e9319'}
            // redirect_uri={'https://localhost:3000/account/login'}
            redirect_uri={'https://github.com/'}
            onLoginStart={()=>console.log('login start')}
            onResolve={({ provider, data }) => {
                // setProvider(provider)
                // setProfile(data)
                console.log(data)
            }}
            onReject={(err) => {
                console.log('errororr',err)
            }}
            className="instagram-button"
        >
            <InstagramLoginButton />
        </LoginSocialInstagram>
    )
}

export default InstagramButton




// import React from "react";
// import InstagramLogin from "instagram-login-react";


// const InstagramLoginComp = () => {

//     const responseInstagram = (response) => {
//         console.log(response);
//     };

//     return (
//         <InstagramLogin
//             clientId='880291606357501'
//             buttonText="Login"
//             onSuccess={responseInstagram}
//             onFailure={responseInstagram}
//         />

//     )

// }





// export default InstagramLoginComp