import axios from "axios";
import config from "../config/config";
import authHeader from "./authHeader";

const URL = config.BASE_URL + "manager/";

class AdminService {
    async setStatus(user: { username: string; active?: boolean }) {
        return axios.post(URL + "to-archive", user, {
            headers: authHeader(),
        });
    }

    async deleteUser(user: { username: string }) {
        return axios.post(URL + "del", user, {
            headers: authHeader(),
        });
    }
}

export default new AdminService();
