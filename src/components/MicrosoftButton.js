import React from 'react'
import { MicrosoftLoginButton } from 'react-social-login-buttons'
import { LoginSocialMicrosoft } from 'reactjs-social-login'

const MicrosoftButton = () => {
    return (
        <LoginSocialMicrosoft
            isOnlyGetToken
            client_id={'58dc96fe-33da-46a2-8393-a0a514b1bfed'}
            redirect_uri={"http://localhost:3000/"}
            // onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
                // setProvider(provider)
                // setProfile(data)
                console.log('MS data', data )
            }}
            onReject={(err) => {
                console.log(err)
            }}
        >
            <MicrosoftLoginButton />
        </LoginSocialMicrosoft>
    )
}

export default MicrosoftButton