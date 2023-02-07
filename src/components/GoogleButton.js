import React, { useEffect, useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './googlebutton.css'


const GoogleButton = ({ setUser, user }) => {

    const [responseData, setResponseData] = useState([])

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            setResponseData(tokenResponse)
        },
    })

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${responseData.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${responseData.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setUser(res.data);
                })
                .catch((err) => console.log(err));
        }
    },
        [responseData]
    );
    return (
        <button className='google-button' onClick={login} > <i className="fab fa-google my-icon "></i> CONTINUE WITH GOOGLE</button>
    )
}

export default GoogleButton