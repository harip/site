import axios from 'axios';
const corsAnyWhere = 'https://cors-anywhere.herokuapp.com/'; 

export default axios.create({
  baseURL: `https://harip-profile.netlify.app/.netlify/functions`
});