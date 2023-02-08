import axios from 'axios'
import React from 'react'
import { LinkedInLoginButton } from 'react-social-login-buttons'
import { LoginSocialLinkedin } from 'reactjs-social-login'
import './linkedinbutton.css'

const LinkedInButton = ({ user, setUser }) => {


    const onResolve = (response) => {
        console.log(response.data)
        if (response.data.access_token) {
            console.log("done")
            const headers = {
                Authorization: `Bearer ${response.data.access_token}`,
                // "X-Restli-Protocol-Version": "2.0.0"
            };
            axios.get('https://api.linkedin.com/v2/me', {
                headers: headers,
                // mode: 'no-cors',
            }).then(res => console.log(res.data))
        } else {
            console.log("undefined")
        }

        // setUser(() => ({ name: response.data.name }))
    }

    return (
        <LoginSocialLinkedin
            isOnlyGetToken
            client_id={'866rdyg06xl0uj'}
            client_secret={'SeI7gkxnU2O0UIVU'}
            redirect_uri={'http://localhost:3000/'}
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