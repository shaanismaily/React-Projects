import axios from "axios"

const client = axios.create({
    baseURL: "https://api.freeapi.app/api/v1",
    headers: {
        'Content-Type': 'application/json',
    },
})

export default client;