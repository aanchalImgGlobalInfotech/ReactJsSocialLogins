import React from 'react'
import { LoginSocialPinterest } from 'reactjs-social-login'
import './pinterestbutton.css'
const PinterestButton = () => {
  return (
    <LoginSocialPinterest
      isOnlyGetToken
      client_id={process.env.REACT_APP_PINTEREST_CLIENT_ID}
      client_secret={process.env.REACT_APP_PINTEREST_CLIENT_SECRET}
      // redirect_uri={REDIRECT_URI}
      // onLoginStart={onLoginStart}
      onResolve={({ provider, data }) => {
        //   setProvider(provider)
        //   setProfile(data)
      }}
      onReject={(err) => {
        console.log(err)
      }}
      className='pinterest-button'
    >
      <div className='content'>
        <i className="fab fa-pinterest pinterest-icon "></i>
        <span className='txt'>Login With Pinterest</span>
      </div>
    </LoginSocialPinterest>
  )
}

export default PinterestButton