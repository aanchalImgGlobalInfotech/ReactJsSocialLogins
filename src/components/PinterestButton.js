import React from 'react'
import { LoginSocialPinterest } from 'reactjs-social-login'

const PinterestButton = () => {
    return (
        <LoginSocialPinterest
        isOnlyGetToken
        // client_id={process.env.REACT_APP_PINTEREST_APP_ID || ''}
        // client_secret={process.env.REACT_APP_PINTEREST_APP_SECRET || ''}
        // redirect_uri={REDIRECT_URI}
        // onLoginStart={onLoginStart}
        onResolve={({ provider, data }) => {
        //   setProvider(provider)
        //   setProfile(data)
        }}
        onReject={(err) => {
          console.log(err)
        }}
        className='pinterest-btn'
      >
        <div className='content'>
          <div className='icon'>
            {/* <PinterestLogo /> */}$$
          </div>
          <span className='txt'>Login With Pinterest</span>
        </div>
      </LoginSocialPinterest>
    )
}

export default PinterestButton