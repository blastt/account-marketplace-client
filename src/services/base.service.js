import axios from 'axios';
import authHeader from './auth-header';


class BaseService {
  
  getAxios() {
    return axios;
  }
  setupInterceptors(history) {
    axios.interceptors.response.use(undefined, (err) => {
      if (err.response.status === 401){
        console.log("401 Error");
        localStorage.removeItem("user");
        history.push('/login')
      }
         return Promise.reject(err);
      }
   );
  }

}



export default new BaseService();