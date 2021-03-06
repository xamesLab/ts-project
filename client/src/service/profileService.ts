import axios from "axios";
import config from "../config/config";
import { IProfileItemProp } from "../types/users";
import authHeader from "./authHeader";

const URL = config.BASE_URL + "users/";

class ProfileService {
    async getProfile() {
        return axios.get(URL + "getProfile", {
            headers: authHeader(),
        });
    }

    async createProfile(newProfile = {}) {
        const response = await axios.post(URL + "createProfile", newProfile, {
            headers: authHeader(),
        });
        window.location.reload();
        return response;
    }

    async updateProfile(data: IProfileItemProp) {
        return axios.post(URL + "updateProfile", data, {
            headers: authHeader(),
        });
    }
}

export default new ProfileService();
