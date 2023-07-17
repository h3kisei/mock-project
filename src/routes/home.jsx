import Button from "../components/CustomButton";
import CustomRadio from "../components/CustomRadio";
import CustomModal from "../components/CustomModal";
import Input from "../components/CustomInputText";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <>
      <h1>Testttt</h1>
      <Button
        border="none"
        color="pink"
        height="200px"
        onClick={() => console.log("You clicked on the pink circle!")}
        radius="50%"
        width="200px"
        children="I'm a pink circle!"
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
      <SideBar />
    </>
  );
};

export default Home;
