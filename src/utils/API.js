import axios from 'axios';
const BASEURL = 'https://randomuser.me/api/?results=25&nat=us';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUsers: function() {
        return axios.get(BASEURL);
    }
};