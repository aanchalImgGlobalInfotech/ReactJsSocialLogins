import './App.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { useState } from 'react';
import GoogleButton from './components/GoogleButton';
import FacebookButton from './components/FacebookButton';
import LinkedInButton from './components/LinkedInButton';
import GitHubButton from './components/GitHubButton';
import InstagramButton from './components/InstagramButton';
import TwitterButton from './components/TwitterButton';
import PinterestButton from './components/PinterestButton';
import MicrosoftButton from './components/MicrosoftButton';
import AppleButton from './components/AppleButton';

function App() {
  const [user, setUser] = useState({ name: '' })
  console.log('from home user', user)
  return (
    <div className="App">
      <h1>{user.name ? user.name : 'Guest'}  </h1>
      <div className='buttons'>
        <div>

          {/* google login */}
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            {/* <GoogleLogin
            onSuccess={credentialResponse => {
              const details = jwt_decode(credentialResponse.credential)
              console.log('details', details)
              setUser(() => ({ name: details.name }))
              console.log(credentialResponse)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          /> */}
            <GoogleButton setUser={setUser} user={user} > </GoogleButton>
          </GoogleOAuthProvider>

          {/* facebook login */}
          <FacebookButton user={user} setUser={setUser} />

          {/* LinkedIn login */}
          <LinkedInButton user={user} setUser={setUser} />

          {/* github login */}
          <GitHubButton user={user} setUser={setUser} />

          {/* instagram login */}
          <InstagramButton user={user} setUser={setUser} />

          {/* twitter login */}
          <TwitterButton user={user} setUser={setUser} />

          {/* twitter login */}
          <PinterestButton user={user} setUser={setUser} />

          {/* microsoft login */}
          <MicrosoftButton user={user} setUser={setUser} />

          {/* Apple login */}
          <AppleButton user={user} setUser={setUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
