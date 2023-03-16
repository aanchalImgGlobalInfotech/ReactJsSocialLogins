import React from 'react'
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import './facebookbutton.css'

const FacebookButton = ({ user, setUser }) => {

    const onResolve = (response) => {
        console.log('from fb login', response.data)
        setUser(() => ({ name: response.data.name }))
    }
    return (
        <LoginSocialFacebook
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            onResolve={onResolve}
            onReject={reject => console.log(reject)}
            className="facebook-button"
        >
            <FacebookLoginButton />
        </LoginSocialFacebook>
    )
}

export default FacebookButton