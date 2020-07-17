import axios from "axios";
export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchUsers() {
    const URL = axios.get(`${BASE_URL}/posts`);
    const response = await URL;
    return response;
}

export async function fetchUsersById(id) {
    const URL = axios.get(`${BASE_URL}/posts/${id}`);
    const response = await URL;
    return response;
}