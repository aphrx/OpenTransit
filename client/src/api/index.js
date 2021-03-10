import axios from 'axios';

const url = 'http://localhost:5000/trains';

export const fetchPosts = () => axios.get(url);