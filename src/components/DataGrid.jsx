import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import CardBox from "./Card";

const DataGrid = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
      {
        [1,1,1,1,1,1,1].map((el,i)=>(
            <CardBox key={i}/>
        ))
      }
    </Grid>
  );
};

export default DataGrid;
