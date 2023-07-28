import "../styles/mainBar.scss";
import search from "../assets/search.png";
import menu from "../assets/menu.png";
import cart from "../assets/Cart-vector.png";
import user from "../assets/UserItem.png";
import TopBar from "../components/TopBar";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Login from "../routes/login";

const MainBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <TopBar />
      <div className="main-bar">
        <h1>SHOP APP</h1>
        <div className="main-bar-mid">
          <div className="categories">
            <img src={menu} alt="" />
            <h2>Categories</h2>
          </div>
          <div className="search">
            <h3>Search Item</h3>
            <img style={{ width: 28, height: 28 }} src={search} alt="" />
          </div>
        </div>
        <img src={cart} alt="" />
        <div>
          <IconButton
            onClick={onOpen}
            aria-label="User"
            variant="unstyled"
            icon={<img src={user} alt="" />}
          />
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Login onClose={onClose} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default MainBar;
