import {
    Image,
    Box,
    Spacer,
    Flex,
    InputRightElement,
    InputGroup,
    Button,
    Input,
    Text,
    Center,
} from "@chakra-ui/react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Book from "./pages/Book"
import MyCart from "./pages/MyCart"
import DetailPage from "./pages/DetailBook"
import BorrowedBook from "./pages/BorrowedBook"
import { login, logout } from "./redux/features/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import { axiosInstance } from "./api"

const App = () => {
    const [authCheck, setAuthCheck] = useState(false)
    const authSelector = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const keepUserLoggedIn = async () => {
        try {
            const auth_token = localStorage.getItem("auth_token")

            if (!auth_token) {
                setAuthCheck(true)
                return
            }

            const response = await axiosInstance.get("/auth/refresh-token")

            dispatch(login(response.data.data))
            localStorage.setItem("auth_token", response.data.token)
            setAuthCheck(true)
        } catch (err) {
            console.log(err)
            setAuthCheck(true)
        }
    }

    const logoutBtnHandler = () => {
        localStorage.removeItem("auth_token")
        dispatch(logout())
    }

    useEffect(() => {
        keepUserLoggedIn()
    }, [])

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
                        <Button
                            onClick={logoutBtnHandler}
                            color={"#9E7676"}
                            mt={2}
                        >
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
            </Box>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/book" element={<Book />} />
                <Route path="/mycart" element={<MyCart />} />
                <Route path="/detail/:bookId" element={<DetailPage />} />
                <Route path="/borrowed" element={<BorrowedBook />} />
            </Routes>
        </>
        //   {/* navbar */}
    )
}

export default App
