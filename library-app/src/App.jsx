
import {
  Image,
  Box,
  Spacer,
  Flex,
  Button,
  Text,
  VStack,
  FormControl,
  Input,
  Square,
  useToast,
} from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Book from "./pages/Book";
import MyCart from "./pages/MyCart";
import DetailPage from "./pages/DetailBook";
import BorrowedBook from "./pages/BorrowedBook";
import { login, logout } from "./redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "./api";
import Profil from "./pages/Profil";
import { useFormik } from "formik";

const App = () => {
  const [authCheck, setAuthCheck] = useState(false);
  const authSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const keepUserLoggedIn = async () => {
    try {
      const auth_token = localStorage.getItem("auth_token");

      if (!auth_token) {
        setAuthCheck(true);
        return;
      }

      const response = await axiosInstance.get("/auth/refresh-token");

      dispatch(login(response.data.data));
      localStorage.setItem("auth_token", response.data.token);
      setAuthCheck(true);
    } catch (err) {
      console.log(err);
      setAuthCheck(true);
    }
  };

  const logoutBtnHandler = () => {
    localStorage.removeItem("auth_token");
    dispatch(logout());
  };

  useEffect(() => {
    keepUserLoggedIn();
  }, []);

  const toast = useToast();
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        feedback: "",
      },
      onSubmit: async ({ name, email, feedback }) => {
        try {
          const response = await axiosInstance.post("/feedback", {
            name,
            email,
            feedback,
          });
          console.log(response)
          toast({
            tittle: "Send Success",
            description: response.data.message,
            status: "success",
          });
        } catch (err) {
          toast({
            tittle: "Registration failed",
            description: err.response.data.message,
            status: "error",
          });
          console.log(err);
        }
      },
    });

    const formChangeHandler = ({ target }) => {
      const { name, value } = target;
      formik.setFieldValue(name, value);
    };


  return (
    // {Navbar}
    <Box>
      <Box>
        <Box bgColor={"#9E7676"} pt={"0,5"} pb={"0,5"}>
          <Flex display={"flex"}>
            <Image
              src="https://i.ibb.co/fXPc0Mx/Krusty-Krab-free-file-1.png"
              alt="Krusty Krab"
              border="0"
              height={"50px"}
            />
            <Link to="/">
              <Box
                p="4"
                color="white"
                _hover={{
                  background: "white",
                  color: "black",
                  transition: "all 10 00ms ease",
                  cursor: "pointer",
                }}
              >
                Home
              </Box>
            </Link>
            <Link to="/profil">
              <Box
                p="4"
                color="white"
                _hover={{
                  background: "white",
                  color: "black",
                  transition: "all 1000ms ease",
                  cursor: "pointer",
                }}
              >
                Profil
              </Box>
            </Link>
            <Link to="/book">
              <Box
                p="4"
                color="white"
                _hover={{
                  background: "white",
                  color: "black",
                  transition: "all 1000ms ease",
                  cursor: "pointer",
                }}
              >
                Catalog Book
              </Box>
            </Link>
            <Link to="/mycart">
              <Box
                p="4"
                color="white"
                _hover={{
                  background: "white",
                  color: "black",
                  transition: "all 1000ms ease",
                  cursor: "pointer",
                }}
              >
                Cart
              </Box>
            </Link>
            <Spacer />
            {authSelector.id ? (
              <Text
                mt={"4"}
                mb={"5"}
                mr={"5"}
                fontWeight="bold"
                color={"white"}
              >
                Hello, {authSelector.username}!
              </Text>
            ) : null}
            {!authSelector.id ? (
              <Box
                p="4"
                color="white"
                _hover={{
                  background: "white",
                  color: "black",
                  transition: "all 1000ms ease",
                  cursor: "pointer",
                }}
              >
                <Link to="/login">Login</Link>
              </Box>
            ) : (
              <Button onClick={logoutBtnHandler} color={"#9E7676"} mt={2}>
                Logout
              </Button>
            )}
            {!authSelector.id ? (
              <Box
                p="4"
                color="white"
                _hover={{
                  background: "white",
                  color: "black",
                  transition: "all 1000ms ease",
                  cursor: "pointer",
                }}
              >
                <Link to="/register">Register</Link>
              </Box>
            ) : null}
            <Box mr="2" mt="2" mb="2"></Box>
          </Flex>
          {/* Navbar */}
        </Box>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/book" element={<Book />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/detail/:bookId" element={<DetailPage />} />
          <Route path="/borrowed" element={<BorrowedBook />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </Box>

      {/* Footer */}
      <Box marginTop="100px" bg="#9E7676">
        <VStack>
          <Flex color="black">
            <Box bg="" width="760px" h="380px">
              <Text
                textAlign="center"
                fontSize="3xl"
                color="white"
                paddingTop={"30px"}
                paddingLeft="150px"
              >
                Ada masukan untuk kami?
              </Text>
              <form onSubmit={formik.handleSubmit}>
              <FormControl
                textAlign={"center"}
                paddingLeft="150px"
                isInvalid={formik.errors.name}
              >
                <Input
                name="name"
                  placeholder="Name"
                  width="340px"
                  marginTop="20px"
                  bg="white"
                  value={formik.values.name}
                  onChange={formChangeHandler}
                />
              </FormControl>

              <FormControl
                isInvalid={formik.errors.email}
                textAlign={"center"}
                paddingLeft="150px"
              >
                <Input
                name="email"
                  placeholder="Email"
                  width="340px"
                  marginTop="10px"
                  bg="white"
                  value={formik.values.email}
                  type="email"
                  onChange={formChangeHandler}
                />
              </FormControl>
              <FormControl
                isInvalid={formik.errors.feedback}
                textAlign={"center"}
                paddingLeft="150px"
              >
                <Input
                name="feedback"
                  placeholder="Feedback"
                  width="340px"
                  bg="white"
                  marginTop="10px"
                  height="100px"
                  onChange={formChangeHandler}
                />
              </FormControl>

              <Button
                bg="orange"
                marginTop="10px"
                marginLeft="475px"
                width="150px"
                _hover={""}
                type="submit"
              >
                Send
              </Button>
              </form>
            </Box>
            <Box flex="1" bg="" width="760px" h="300px" paddingTop="30px">
              <Text
                textAlign="center"
                fontSize="3xl"
                color="white"
                paddingRight={"200px"}
              >
                Hubungi kami
              </Text>
              <Square justifyContent={"center"}>
                <Image
                  src="https://i.ibb.co/fXPc0Mx/Krusty-Krab-free-file-1.png"
                  alt="Krusty Krab"
                  border="0"
                  height="100px"
                  paddingRight={"100px"}
                  marginTop="18px"
                />
              </Square>
              <Square
                justifyContent={"center"}
                marginLeft="40px"
                marginTop={"12px"}
                paddingRight="180px"
              >
                <Text
                  marginTop={"10px"}
                  color="white"
                  fontFamily={"sans-serif"}
                >
                  Perpustakaan Resep Bikini Bottom
                </Text>
              </Square>
              <Square
                justifyContent={"center"}
                marginLeft="40px"
                paddingLeft={"67px"}
              >
                <Text
                  marginTop={"10px"}
                  color="white"
                  fontFamily={"sans-serif"}
                >
                  Jl. Raya Bikini Bottom No. 2, Kec. Simpang kerang, Samudera
                  Pasific
                </Text>
              </Square>
              <Square
                justifyContent={"center"}
                marginLeft="40px"
                paddingRight={"193px"}
              >
                <Text
                  marginTop={"10px"}
                  fontSize
                  color="white"
                  fontFamily={"sans-serif"}
                >
                  Email: krustykrablib@gmail.com{" "}
                </Text>
              </Square>
            </Box>
          </Flex>
        </VStack>
      </Box>
      {/* Footer */}
    </Box>
  );
};
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/book" element={<Book />} />
                <Route path="/mycart" element={<MyCart />} />
                <Route path="/detail/:bookId" element={<DetailPage />} />
                <Route path="/borrowed" element={<BorrowedBook />} />
                <Route path="/admin/detail/:bookId" element={<DetailPageAdmin />} />
            </Routes>
        </>
        //   {/* navbar */}
    )
}

export default App
