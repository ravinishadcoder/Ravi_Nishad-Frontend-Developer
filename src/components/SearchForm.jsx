import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterDataByDate,
  filterDataByStatus,
  filterDataByType,
} from "../store/action";
import { useEffect } from "react";
const SearchForm = () => {
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  useEffect(() => {
    dispatch(filterDataByStatus(status));
  }, [status]);
  useEffect(() => {
    dispatch(filterDataByType(type));
  }, [type]);
  useEffect(() => {
    dispatch(filterDataByDate(date));
  }, [date]);
  return (
    <HStack p="10px" flexDirection={["column","row"]}>
      <Box>
        <Text>Filters :</Text>
      </Box>
      <HStack>
        <Box>
          <Select
            value={status}
            placeholder="Select Status"
            onChange={handleStatus}
          >
            <option value="active">Active</option>
            <option value="retired">Retired</option>
            <option value="unknown">Unknown</option>
          </Select>
        </Box>
        <Box>
          <Select value={type} placeholder="Select Type" onChange={handleType}>
            <option value="Dragon 1.0">Dragon 1.0</option>
            <option value="Dragon 1.1">Dragon 1.1</option>
            <option value="Dragon 2.0">Dragon 2.0</option>
          </Select>
        </Box>
        <Box>
          <Input type="date" value={date} onChange={handleDate} />
        </Box>
      </HStack>
      
    </HStack>
  );
};

export default SearchForm;
