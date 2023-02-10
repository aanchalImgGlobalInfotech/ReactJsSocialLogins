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
            client_id={process.env.REACT_APP_INSTAGRAM_CLIENT_ID}
            client_secret={process.env.REACT_APP_INSTAGRAM_CLIENT_SECRET}
            // redirect_uri={'https://localhost:3000/account/login'}
            redirect_uri={'http://localhost:3000/'}
            // redirect_uri={'https://github.com/'}
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