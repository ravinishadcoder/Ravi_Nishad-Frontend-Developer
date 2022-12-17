import {
  FILTER_DATA_BY_DATE,
  FILTER_DATA_BY_STATUS,
  FILTER_DATA_BY_TYPE,
  GET_DATA,
  LOADING_DATA,
  LOADING_ERROR,
  Pagination_DATA,
} from "./action.type";

const initState = {
  loading: false,
  error: false,
  data: [],
  page: 1,
  totalPage: 0,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload.data,
        totalPage: payload.totalPage,
        
      };
    }
    case FILTER_DATA_BY_TYPE: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case FILTER_DATA_BY_STATUS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case FILTER_DATA_BY_DATE: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
        
      };
    }
    case Pagination_DATA: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload.data,
        page: payload.page,
      };
    }
    case LOADING_ERROR: {
      return {
        ...state,
        loading: true,
        error: true,
      };
    }
    case LOADING_DATA: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};
