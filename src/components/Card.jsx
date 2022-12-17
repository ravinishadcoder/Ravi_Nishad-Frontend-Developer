import { Button, Card, CardBody, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import ModalBox from "./Modal";

const CardBox = ({info}) => {
    const [isOpen,setIsOpen]=useState(false)
    const onOpen=()=>{
        setIsOpen(true)
    }
    const onClose=()=>{
    setIsOpen(false)
    }
  return (
    <Card bg="#a0c4e0">
      <CardBody>
        <Text>Capsule Serial: {info.capsule_serial}</Text>
        <Text>Type: {info.type}</Text>
        <Text>Status: {info.status}</Text>
      </CardBody>
      <Button onClick={onOpen} bg="Highlight">More Details</Button>
      <ModalBox isOpen={isOpen} onClose={onClose} info={info} />
    </Card>
  );
};

export default CardBox;
