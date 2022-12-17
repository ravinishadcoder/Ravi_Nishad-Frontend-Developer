import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../store/action";
import CardBox from "./Card";
import Pagination from "./Pagination";
import SearchForm from "./SearchForm";

const DataGrid = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProductApi());
  }, []);
  return (
    <>
    <SearchForm/>
      {loading ?
     
      (
        <div  >
          <center>
          <img
            src="https://media.tenor.com/wpSo-8CrXqUAAAAj/loading-loading-forever.gif"
            alt="loading"
            width="50px"
          />
          </center>
        </div>
      ) : (
         <>
          <Grid templateColumns={["repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)"]} gap={4} p="15px">
            {data?.map((el, i) => (
              <CardBox key={i} info={el} />
            ))}
          </Grid>
          <Pagination/>
         </>
      )}
    </>
  );
};

export default DataGrid;
