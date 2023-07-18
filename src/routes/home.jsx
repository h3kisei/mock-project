import Button from "../components/CustomButton";
import CustomRadio from "../components/CustomRadio";
import CustomModal from "../components/CustomModal";
import Input from "../components/CustomInputText";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import CustomDropdown from "../components/CustomDropdown";
import MainBar from "../components/MainBar";

const Home = () => {
  return (
    <>
      <h1>Testttt</h1>
      <Button
        border="none"
        color="#FFD333"
        height="40px"
        onClick={() => console.log("New product!")}
        radius="5px"
        width="150px"
        children="New product"
        fontSize="20px"
        fontWeight="400"
      />
      <CustomRadio colorScheme="red" size="sm" value="1" children="Hoang" />
      <CustomModal children="Are you sure to delete" />
      <Input
        type="email"
        label="Email"
        name="email"
        placeholder="Please enter your email"
        border="1px"
        width="200px"
      />
      <AppBar />
      <CustomDropdown />
      <TopBar />
      <MainBar />
      <SideBar />
    </>
  );
};

export default Home;
