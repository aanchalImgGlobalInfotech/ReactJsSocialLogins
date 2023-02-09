import React from 'react'
import { LoginSocialPinterest } from 'reactjs-social-login'

const PinterestButton = () => {
  return (
    <LoginSocialPinterest
      isOnlyGetToken
      client_id={'1484121'}
      client_secret={'pina_AMAVTJIWACRR4AQAGAAJEDJIBRZTJBQBQBIQDAVUT4Y5QTZGJAR36HDIJ4SR7MNPSUJT7D5R52HOOH6NWRBPR2NPNHFNUKAA'}
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
          {/* <PinterestLogo /> */}
        </div>
        <span className='txt' style={{border:'2px  solid #e40114' , backgroundColor:'#e40114' , color:"white"}} >Login With Pinterest</span>
      </div>
    </LoginSocialPinterest>
  )
}

export default PinterestButton