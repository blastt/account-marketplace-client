import {
    SET_INTERCEPTOR
  } from "./types";

  import baseService from "../services/base.service";

export const setupInterceptors = (history) => (dispatch) => {
    baseService.setupInterceptors(history);

    dispatch({
      type: SET_INTERCEPTOR,
    });
  };