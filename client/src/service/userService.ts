import axios from "axios";
import config from "../config/config";
import authHeader from "./authHeader";

const URL = config.BASE_URL + "users/";

class UserService {
    async getAllUsers() {
        return axios.get(URL + "getAllUser", {
            headers: authHeader(),
        });
    }

    async login(loginData: { username: string; password: string }) {
        return axios.post(URL + "login", loginData, {
            headers: authHeader(),
        });
    }

    async registration(regData: { username: string; password: string }) {
        return axios.post(URL + "reg", regData, {
            headers: authHeader(),
        });
    }

    async validateToken() {
        return axios.get(URL + "validateToken", {
            headers: authHeader(),
        });
    }
}

export default new UserService();
