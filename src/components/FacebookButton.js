import React from 'react'
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import './facebookbutton.css'

const FacebookButton = ({user, setUser}) => {

    const onResolve = (response)=>{
         console.log('from fb login',response.data)  
         setUser(()=>({name:response.data.name}))

    } 
    return (
        <div>
            <LoginSocialFacebook
                appId='1342510699918475'
                onResolve={onResolve}
                onReject={reject => console.log(reject)}
                className="facebook-button"
            >
                <FacebookLoginButton />
            </LoginSocialFacebook>

        </div>
    )
}

export default FacebookButton