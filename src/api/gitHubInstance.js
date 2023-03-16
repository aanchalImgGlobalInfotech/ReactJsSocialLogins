import axios from "axios";

const token = localStorage.getItem('access-token')


const gitHubInstance = axios.create({
    baseURL: 'https://api.github.com/user',
    headers: {
        Authorization: `${token}`,
        Content-Type: "application/json",
         timeout: 1000,
},
});

export default gitHubInstance;