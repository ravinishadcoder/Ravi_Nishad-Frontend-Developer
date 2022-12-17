import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handlePagination } from '../store/action';
import { ChevronLeftIcon,ChevronRightIcon } from '@chakra-ui/icons'
const Pagination = () => {
    const {totalPage,page}=useSelector(state=>state);
    const dispatch=useDispatch()
    const arr = new Array(totalPage).fill().map((el,i)=>i+1);
    const handlePage=(e)=>{
    dispatch(handlePagination(e.target.value))
    }
  return (
    <HStack justifyContent="center" mb="5px">
      <ChevronLeftIcon color="tomato"/>
       {
    arr?.map((el)=>(
        <Button bg="tomato" borderRadius="50%" value={el} disabled={el==page} key={el} onClick={handlePage}>{el}</Button>
    ))
       }
       <ChevronRightIcon color="tomato"/>
    </HStack>
  )
}

export default Pagination