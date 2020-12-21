// TODO: Should I rename this?

import axios, { AxiosError, AxiosResponse } from 'axios';

// TODO: Return type
export const register = (email: string, password: string) => {
    return axios.post('/api/users', {
        email, password
    });
}

export const login = (email: string, password: string) => {
    return axios.post('/api/users/login', {
        email, password
    });
}
