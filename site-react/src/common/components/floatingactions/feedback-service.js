import axiosCfg from '../../../apis/axiosConfig';

const onFeedbackSubmit = async (data) => {  
  const response = await axiosCfg.put('/feedback',data); 
  return response.data;
}

export default onFeedbackSubmit;