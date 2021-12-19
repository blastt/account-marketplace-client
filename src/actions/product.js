import {
    SET_INTERCEPTOR
  } from "./types";
  
  import ProductService from "../services/product.service";
  

  export const setupInterceptors = (history) => (dispatch) => {
    ProductService.setupInterceptors(history);

    dispatch({
      type: SET_INTERCEPTOR,
    });
  };