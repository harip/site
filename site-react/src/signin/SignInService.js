import axiosConfig from "../apis/axiosConfig"; 

const ValidateCredentials = async (creds) => {
    const response = await axiosConfig.post('/auth',creds);
    return response.data;
};

export default ValidateCredentials;