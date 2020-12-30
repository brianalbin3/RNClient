
import axios, { AxiosError, AxiosResponse } from 'axios';



export const findAccount = (email: string) => {
    return axios.get(`/api/users/findaccount/${email}`);
}