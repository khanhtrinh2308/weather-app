import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default instance;
