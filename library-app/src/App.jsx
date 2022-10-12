import {
  Box,
  Spacer,
  Flex,
  InputRightElement,
  InputGroup,
  Button,
  Input,
} from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    // {Navbar}
    <>
      <Box background={"green.700"} pt={"0,5"} pb={"0,5"}>
        <Flex display={"flex"}>
          
            <Box
              p="4"
              color="white"
              _hover={{
                background: "white",
                color: "black",
                transition: "all 10 00ms ease",
                cursor: "pointer"
              }}
            >
              Home
            </Box>
          <Box
            p="4"
            color="white"
            _hover={{
              background: "white",
              color: "black",
              transition: "all 1000ms ease",
              cursor: "pointer"
            }}
          >
            About
          </Box>
          <Box
            p="4"
            color="white"
            _hover={{
              background: "white",
              color: "black",
              transition: "all 1000ms ease",
              cursor: "pointer"
            }}
          >
            Catalog Book
          </Box>
          <Box
            p="4"
            color="white"
            _hover={{
              background: "white",
              color: "black",
              transition: "all 1000ms ease",
              cursor: "pointer"
            }}
          >
            Help
          </Box>
          <Spacer />
            <Box p="4"
            color="white"
            _hover={{
              background: "white",
              color: "black",
              transition: "all 1000ms ease",
              cursor: "pointer"
            }}
            >
            <Link to="/login">Login</Link>
            </Box>
            <Box p="4"
            color="white"
            _hover={{
              background: "white",
              color: "black",
              transition: "all 1000ms ease",
              cursor: "pointer"
            }}>
            <Link to="/register">Register</Link>
            </Box>
          <Box mr="2" mt="2" mb="2">
            <InputGroup >
              <Input placeholder="search here" ></Input>
              <InputRightElement width={"2,5 rem"}>
                <Button _hover={{ background: "white" }} color={"white.300"} >
                  Search
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
      </Box>
        <Routes>
      <Route
        path="/register"
        element={
            <RegisterPage/>
        }
        />
      <Route
        path="/login"
        element={
            <LoginPage/>
        }
        />
        </Routes>
    </>
    //   {/* navbar */}
  );
};

export default App;
