import axios from 'axios';


const instance = axios.create({  
    baseURL: 'http://localhost:8001',
    timeout: 9000,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  });
  

export default instance;