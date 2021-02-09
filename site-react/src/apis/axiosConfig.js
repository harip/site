import axios from 'axios';
export default axios.create({
  baseURL: `https://harip-profile.netlify.app/.netlify/functions`
});