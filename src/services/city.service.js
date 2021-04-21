import axios from "axios";

const API_URL = "http://localhost:8080/api/city/";

class CityService {
    getPublicContent() {
        return axios.get(API_URL);
    }
}

export default new CityService();