import axios from 'axios'

const API_HOST = 'https://localhost:8080/apiv1'

export const fetchPartner = async () => {
    const response = await axios.get(`${API_HOST}/partner`);
    return response.data;
}