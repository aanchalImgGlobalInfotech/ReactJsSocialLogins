import React from 'react'
import { AppleLoginButton } from 'react-social-login-buttons';
import { LoginSocialApple } from 'reactjs-social-login';

const AppleButton = () => {
    return (
        <LoginSocialApple
            // client_id={process.env.REACT_APP_APPLE_ID || ''}
            scope='name email'
            // redirect_uri={REDIRECT_URI}
            // onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
                // setProvider(provider);
                // setProfile(data);
            }}
            onReject={err => {
                console.log(err);
            }}
        >
            <AppleLoginButton />
        </LoginSocialApple>
    )
}

export default AppleButton