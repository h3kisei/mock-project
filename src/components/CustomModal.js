import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const CustomModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{children}</ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme="blue" ml={3}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
