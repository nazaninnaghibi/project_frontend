import axios from "axios";

const USER_API_BASE_URL = 'http://localhost:8080/users/';

class UserApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL + 'index').then(function (response) {
            console.log(":::::::::::::" + response.data)
            return response.data;
        })
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        console.log("EEEEEEEEEEEE   " + "localhost:8080/users/" + userId);
        return axios.delete("localhost:8080/users/" + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}
export default new  UserApiService();