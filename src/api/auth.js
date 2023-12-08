import { get, post } from "./base";

export async function login(username, password, device_name){ 
    return await post('/auth/issue-token', {
        username,
        password,
        device_name
    });
}

export async function getUserData(token){ 
    return await get('/user', {
        'Authorization': `Bearer ${token}`
    });
}