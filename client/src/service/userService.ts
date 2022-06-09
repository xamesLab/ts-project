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
}

export default new UserService();
