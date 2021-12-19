import axios from "axios";

axios.interceptors.response.use(response => {
    console.log("dsfkdjsmfkljsdlogkdfghdjfhgjdfghjg2")
    return response;
 }, error => {
   if (error.response.status === 401) {
    console.log("dsfkdjsmfkljsdlogkdfghdjfhgjdfghjg")
   }
   return error;
 });