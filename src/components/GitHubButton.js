import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GithubLoginButton } from 'react-social-login-buttons'
import { LoginSocialGithub } from 'reactjs-social-login'
import './githubbutton.css'

const GitHubButton = ({ user, setUser }) => {
  const [response, setResponse] = useState()

  const onResolve = (response) => {
    setResponse(response.data)
    localStorage.setItem('access-token', response.data.access_token)

    const token = localStorage.getItem('access-token')
    axios.get(`https://api.github.com/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => setUser(() => ({ name: res.data.login })))
    .catch(err=>console.log('err from github' , err))

  }



  return (
    <LoginSocialGithub
      isOnlyGetToken
      client_id={process.env.REACT_APP_GITHUB_CLIENT_ID}
      client_secret={process.env.REACT_APP_GITHUB_CLIENT_SECRET}
      redirect_uri={'http://localhost:3000'}
      // onLoginStart={onLoginStart}
      onResolve={onResolve}
      onReject={(err) => {
        console.log(err)
      }}

      className='github-button'
    >
      <GithubLoginButton />
    </LoginSocialGithub>
  )
}

export default GitHubButton