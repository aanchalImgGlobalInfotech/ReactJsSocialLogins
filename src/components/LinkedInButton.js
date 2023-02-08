import React from 'react'
import { LinkedInLoginButton } from 'react-social-login-buttons'
import { LoginSocialLinkedin } from 'reactjs-social-login'
import './linkedinbutton.css'

const LinkedInButton = ({user, setUser}) => {


    const onResolve = (response) => {
        console.log(response)
        // setUser(() => ({ name: response.data.name }))
    }

    return (
        <LoginSocialLinkedin
            isOnlyGetToken
            client_id={'866rdyg06xl0uj'}
            client_secret={'SeI7gkxnU2O0UIVU'}
            redirect_uri={'https://75b5-2401-4900-1c1b-a4e0-1cf-c517-3041-2a52.in.ngrok.io/'}
            // redirect_uri={'https://www.linkedin.com/developers/tools/oauth/redirect'}
            // redirect_uri={'https://www.google.com'}
            onLoginStart={() => console.log('login start')}
            onResolve={onResolve}
            onReject={(err) => {
                console.log(err)
            }}

            className="linkedin-button"
        >
            <LinkedInLoginButton />
        </LoginSocialLinkedin>
    )
}

export default LinkedInButton