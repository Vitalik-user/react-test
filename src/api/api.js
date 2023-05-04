import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    //headers: {'API_KEY': '93d4fd63-4f54-48be-8079-57703f275c4e'}
})


export const userAPI = {
    getUser(pageSize = 10, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}

export const authAPI = {
    getAuthData(){
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userID){
        return instance.get(`profile/` + userID ).then(response => response.data)
    },
    getStatus(userID){
        return instance.get(`profile/status/` + userID ).then(response => response.data)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    }
}