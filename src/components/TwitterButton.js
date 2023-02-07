import React from 'react'
import { TwitterLoginButton } from 'react-social-login-buttons'
import { LoginSocialTwitter } from 'reactjs-social-login'
import './twitterbutton.css'

const TwitterButton = ({ user, setUser }) => {

    return (
        <LoginSocialTwitter
            isOnlyGetToken
            client_id={"FpNsD3jmcvW469eLM15p6rp2Q"}
            redirect_uri={'https://github.com/'}
            // onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
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