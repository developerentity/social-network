import Axios from "axios"

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '578a5f36-0f95-4a91-a1d4-86904b25ee94'
    }
});

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 5) {
        const res = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return res.data
    },
    async getProfile(userId) {
        const res = await instance.get(`profile/${userId}`)
        return res.data;
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
