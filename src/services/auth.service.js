import axios from "axios";

//const API_URL = "http://localhost:14582/api/Authentication/";

const httpClient = axios.create({
  baseURL: "http://localhost:14582/api/Authentication",
  });

class AuthService {
  login(username, password) {
    return httpClient
      .post("/login", { username, password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return httpClient.post("/register", {
      username,
      email,
      password,
    });
  }

  
}

httpClient.interceptors.response.use(response => {
  console.log("dsfkdjsmfkljsdlogkdfghdjfhgjdfghjg2")
  return response;
}, error => {
 if (error.response.status === 401) {
  console.log("dsfkdjsmfkljsdlogkdfghdjfhgjdfghjg")
 }
 return error;
});



export default new AuthService();