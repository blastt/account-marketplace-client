import axios from 'axios';
import authHeader from './auth-header';


const httpClient = axios.create({
  baseURL: "http://localhost:8001/api/products",
  });
  
  
  


class ProductService {
  
  getProducts() {
    return httpClient.get('', { headers: authHeader() });
  }
  setupInterceptors(history) {
    httpClient.interceptors.response.use(undefined, (err) => {

      if (err.response.status === 401) {
        console.log("401 Error");
        localStorage.removeItem("user");
        history.push({
          pathname: '/login',
          fromError: true
        });
      }
      if (err.response.status === 403) {
          console.log('Error 403');
      }

         return Promise.reject(err);
      }
   );
  }

}



export default new ProductService();