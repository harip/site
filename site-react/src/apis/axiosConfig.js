import axios from 'axios';
const corsAnyWhere = 'https://cors-anywhere.herokuapp.com/'; 

export default axios.create({
  baseURL: `http://localhost:55076`
});