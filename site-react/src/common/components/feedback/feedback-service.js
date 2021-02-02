import axiosCfg from '../../../apis/axiosConfig';

const onFeedbackSubmit = async () => {  
  const response = await axiosCfg.get('/feedback'); 
  return response.data;
}

export default onFeedbackSubmit;