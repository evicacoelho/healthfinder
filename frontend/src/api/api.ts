import axios from 'axios';

require('dotenv').config();

export const fetchPartner = async () => {
    const response = await axios.get(`${process.env.API_HOST}`);
    return response.data;
}