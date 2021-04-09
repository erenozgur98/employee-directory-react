import axios from 'axios';
const BASEURL = 'https://randomuser.me/api/?results=200&nat=us';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUsers: function(query) {
        return axios.get(BASEURL + query);
    }
};