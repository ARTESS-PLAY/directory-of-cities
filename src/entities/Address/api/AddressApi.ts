import axios from 'axios';
import { UserAddressDto } from '../model/types';

const url = 'http://localhost:3005/addresses';

interface createAddressProps {
    city: string;
    district: string;
    street: string;
    name: string;
}

export const createAddress = async (obj: createAddressProps) => {
    const { data } = await axios.post(url, { ...obj, population: 10000 });

    return data;
};

export const getAddresses = async () => {
    const { data } = await axios.get<UserAddressDto[]>(url);

    return data;
};

export const getAvailable = async () => {
    const { data } = await axios.get(`${url}/available`);

    return data;
};

export const removeAddress = async (id: string) => {
    const { data } = await axios.delete(`${url}/${id}`);

    return data;
};
