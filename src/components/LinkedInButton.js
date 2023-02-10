import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios'
import React from 'react'
import { LinkedInLoginButton } from 'react-social-login-buttons'
import { LoginSocialLinkedin } from 'reactjs-social-login'
import './linkedinbutton.css'

const LinkedInButton = ({ user, setUser }) => {
    const state = '322rkjhskjdf32823bkjb__323923r23sdfDFADfwe'

    // https://www.linkedin.com/oauth/v2/autorization?response_type=code&state=123456789&scope=r_liteprofile&client_id=866rdyg06xl0uj&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F

    const onResolve = (response) => {
        console.log(response.data)
        if (response.data.access_token) {
            console.log("done")
            // axios.get('https://api.linkedin.com/v2/me', {
            // axios.get('https://www.linkedin.com/oauth/v2/authorization', {
            // axios.get(`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=866rdyg06xl0uj&redirect_uri=http://localhost:3000/&state=${state}&scope=r_liteprofile%20r_emailaddress%20w_member_social`, {
            // axios.get(`https://www.linkedin.com/oauth/v2/accessToken?code=${response.data.access_token}&grant_type=authorization_code&client_id=866rdyg06xl0uj&client_secret=SeI7gkxnU2O0UIVU&redirect_uri=http://localhost:3000/`, {
            // axios.get('https://api.linkedin.com/v2/jobs', {
                // axios.post('https://www.linkedin.com/oauth/v2/accessToken', {
            axios.get('https://api.linkedin.com/v2/me', {
                headers: {
                    Connection: "Keep - Alive",
                    Authorization: ` Bearer ${response.data.access_token}`,
                    "X-Restli-Protocol-Version": "2.0.0",
                },
                // headers: {
                //     Authorization: `Bearer ${response.data.access_token}`,
                //     "X-Restli-Protocol-Version": "2.0.0",
                //      mode: 'no-cors',
                // },
            }).then(res => console.log(res.data)).catch((err) => console.log('error from linkedIn', err))
        } else {
            console.log("undefined")
        }
        // setUser(() => ({ name: response.data.name }))
    }

    // const loginWithLinkedIn = () => {
    //     axios.post('https://www.linkedin.com/oauth/v2/accessToken', {
    //         headers: {
    //             'Content-Type': 'application/ x - www - form - urlencoded',
    //             grant_type: "client_credentials",
    //             client_id: "866rdyg06xl0uj",
    //             client_secret: 'SeI7gkxnU2O0UIVU',
    //         }
    //     }).then((res)=>console.log('response',res))
    // }

    return (
        <>
            <LoginSocialLinkedin
                isOnlyGetToken
                client_id='866rdyg06xl0uj'
                client_secret='SeI7gkxnU2O0UIVU'
                redirect_uri='http://localhost:3000/'
                // redirect_uri={'https://www.linkedin.com/developers/tools/oauth/redirect'}
                // redirect_uri={'https://www.google.com'}
                onLoginStart={() => console.log('login start')}
                onResolve={onResolve}
                onReject={(err) => {
                    console.log(err)
                }}
                className="linkedin-button"
            >
                <LinkedInLoginButton  />
            </LoginSocialLinkedin>
            {/* <button onClick={loginWithLinkedIn} >Click</button> */}
        </>
    )
}

export default LinkedInButton