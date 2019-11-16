import axios from 'axios';

export default {
    getById: async (id) => {
        let res = await axios.get(`/reviewsApi/reviewById/${id}`);
        return res.data || [];
    }
}