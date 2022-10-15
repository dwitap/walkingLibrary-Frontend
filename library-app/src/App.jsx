import {

    Image,
    Box,
    Spacer,
    Flex,
    InputRightElement,
    InputGroup,
    Button,
    Input,
} from "@chakra-ui/react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Book from "./pages/Book"
import MyCart from "./pages/MyCart"
import DetailPage from "./pages/DetailBook"
import BorrowedBook from "./pages/BorrowedBook"


const App = () => {
    return (
        // {Navbar}
        <>
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
                        About
                    </Box>
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
                    <Box mr="2" mt="2" mb="2">
                        <InputGroup>
                            <Input
                                placeholder="search here"
                                color={"white"}
                                // _placeholder= {{color: 'black'}}
                            ></Input>
                            <InputRightElement width={"2,5 rem"}>
                                <Button
                                    _hover={{ background: "white" }}
                                    color={"white.300"}
                                >
                                    Search
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Box>
                </Flex>
            </Box>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/book" element={<Book />} />
                <Route path="/mycart" element={<MyCart />} />
                <Route path="/detail" element={<DetailPage />} />
                <Route path="/borrowed" element={<BorrowedBook />} />
            </Routes>
        </>
        //   {/* navbar */}
    )
}

export default App;
