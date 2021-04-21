import axios from "axios";

const API_URL = "http://localhost:5000/api/";

export function availableCities() {
    return axios.get('http://localhost:5000/api/city').then(function (response) {
        return response.data;
    })
}

export function hotels() {
    return axios.get('http://localhost:5000/api/hotel').then(function (response) {
        return response.data;
    })
}


export function hotelsUserId(userId) {
    return axios.get('http://localhost:5000/flight/user'+ '/' + userId).then(function (response) {
        // console.log("BBBBBBBBB" + response.data);
        return response.data;
    })
}

export function cities() {
    return axios.get('http://localhost:5000/api/city').then(function (response) {
        return response.data;
    })
}

export function users(){
    return axios.get('http://localhost:5000/users/index').then(function (response) {
        return response.data;
    })
}

export function fetchUserById(userId) {
    return axios.get("http://localhost:5000/api/users" + '/' + userId).then(function (response) {
        console.log("::::::" + response.data);
        return response.data;
    })
}

export function deleteUserById(userId) {
    console.log("111111111111   " + "localhost:5000/users/" + userId);

    return axios.delete("localhost:5000/users/" + userId, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        return response.data;
    })
}

export function contactUs(){
    return axios.get('http://localhost:5000/contactus')
        .then(function (response) {
        return response.data;
    })
}

export function faqs(){
    return axios.get('http://localhost:5000/api/faq').then(function (response) {
        return response.data;
    })
}

export function deleteUser(id){
    return axios.delete(`http://localhost:5000/users/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        return response.data;
    })
}