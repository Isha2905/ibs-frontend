import axios from 'axios';
import http from "../utils/http-client";
const BASE_URL = "http://localhost:9090/api"
// const OPENACC_URL = "http://localhost:9090/api/openaccount";

class userService{
    saveUser(user){
        return axios.post(`${BASE_URL}/openaccount`,user);
    }
    saveUserId(user){
        return axios.post(`${BASE_URL}/register`,user);
    }
    getUsers(){
        return axios.get(`${BASE_URL}/userlist`);
    }
    getUser(userId){
        return http.get(`${BASE_URL}/userDashboard/${userId}`)
    }
}

export default new userService();
