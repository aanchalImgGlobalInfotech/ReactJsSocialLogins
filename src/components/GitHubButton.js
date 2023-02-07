import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GithubLoginButton } from 'react-social-login-buttons'
import { LoginSocialGithub } from 'reactjs-social-login'
import './githubbutton.css'

const GitHubButton = ({user, setUser}) => {
  const [response, setResponse] = useState()

  const onResolve = (response) => {
    setResponse(response.data)
    localStorage.setItem('access-token', response.data.access_token)
  }

  const getData = async () => {
    const token = localStorage.getItem('access-token')
    const data = await axios.get(`https://api.github.com/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setUser(() => ({ name: data.data.login }))
  }

  useEffect(() => {
    getData()
  }, [response])


  return (
    <LoginSocialGithub
      isOnlyGetToken
      client_id={"fb4d4f5623cfffdbf51b"}
      client_secret={"6a4f4fd44a2ca67bf80fad5f20057e1830647775"}
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