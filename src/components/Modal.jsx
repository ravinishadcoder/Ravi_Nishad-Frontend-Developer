import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

export default function ModalBox({ isOpen, onClose, info }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>All Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Capsule Serial: {info.capsule_serial}</Text>
            <Text>Capsule ID: {info.capsule_id}</Text>
            <Text>Type: {info.type}</Text>
            <Text>Status: {info.status}</Text>
            <Text>Details: {info.details}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
