import axios from 'axios';

export default {
    getAll: async () => {
        let res = await axios.get(`/reviewsApi/review/1`);
        return res.data || [];
    }
}