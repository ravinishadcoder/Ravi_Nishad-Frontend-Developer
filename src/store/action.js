import {
  FILTER_DATA_BY_DATE,
  FILTER_DATA_BY_STATUS,
  FILTER_DATA_BY_TYPE,
  GET_DATA,
  LOADING_DATA,
  LOADING_ERROR,
  Pagination_DATA,
} from "./action.type";
import axios from "axios";
export const getProductApi = () => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  try {
    const res = await axios.get("https://api.spacexdata.com/v3/capsules");
    let totalLength = res.data.length;
    let totalPage = Math.ceil(totalLength / 10);
    res.data.length = 10;
    dispatch({
      type: GET_DATA,
      payload: { data: res.data, totalPage: totalPage },
    });
  } catch (e) {
    dispatch({ type: LOADING_ERROR });
  }
};

export const filterDataByStatus = (status) => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  try {
    console.log(status);
    const res = await axios.get(
      `https://api.spacexdata.com/v3/capsules?status=${status}`
    );

    dispatch({ type: FILTER_DATA_BY_STATUS, payload: res.data });
  } catch (e) {
    dispatch({ type: LOADING_ERROR });
  }
};
export const filterDataByType = (type) => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  try {
    const res = await axios.get(
      `https://api.spacexdata.com/v3/capsules?type=${type}`
    );
    dispatch({ type: FILTER_DATA_BY_TYPE, payload: res.data });
  } catch (e) {
    dispatch({ type: LOADING_ERROR });
  }
};
export const filterDataByDate = (date) => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  try {
    date = new Date(date).toISOString();
    const res = await axios.get(
      `https://api.spacexdata.com/v3/capsules?original_launch=${date}`
    );

    dispatch({ type: FILTER_DATA_BY_DATE, payload: res.data });
  } catch (e) {
    dispatch({ type: LOADING_ERROR });
  }
};

export const handlePagination = (page) => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  try {
    const res = await axios.get("https://api.spacexdata.com/v3/capsules");

    let end = Number(page) * 10;
    let start = end - 10;
    let newData = res.data.splice(start, end);

    dispatch({ type: Pagination_DATA, payload: { data: newData, page: page } });
  } catch (e) {
    dispatch({ type: LOADING_ERROR });
  }
};
