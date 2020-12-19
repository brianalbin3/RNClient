// TODO: Should I rename this?

import axios, { AxiosError, AxiosResponse } from 'axios';
import { exception } from 'console';

// TODO: Return type
export const register = async (email: string, password: string) => {
    return axios.post('/api/users', {
        email, password
    });
}
