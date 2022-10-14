import {
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import * as Yup from "yup"
import { axiosInstance } from "../api"
import { login } from "../redux/features/authSlice"

const LoginPage = () => {
    const toast = useToast()

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            NIM: "",
            password: "",
        },
        onSubmit: async ({ NIM, password }) => {
            try {
                const response = await axiosInstance.post("/user/login", {
                    NIM,
                    password,
                })

                dispatch(
                    login({
                        username: response.data.data.username,
                        email: response.data.data.email,
                        id: response.data.data.id,
                    })
                )

                toast({
                    status: "success",
                    title: "Login success",
                    description: response.data.message,
                })
            } catch (err) {
                console.log(err)
                toast({
                    status: "error",
                    title: "Login failed",
                    description: err.response.data.message,
                })
            }
        },
        validationSchema: Yup.object({
            NIM: Yup.number().required().min(3),
            password: Yup.string().required(),
        }),
        validateOnChange: false,
    })

    const formChangeHandler = ({ target }) => {
        const { name, value } = target
        formik.setFieldValue(name, value)
    }

    return (
        <Box>
            <Container>
                <Box
                    p="8"
                    borderRadius="20px"
                    border="solid 1px lightgrey"
                    marginTop="100px"
                    bgColor={"#9E7676"}
                    color={"white"}
                >
                    <Text fontWeight="bold" fontSize="4xl" mb="8">
                        Member
                    </Text>

                    <form onSubmit={formik.handleSubmit}>
                        <Stack>
                            <FormControl isInvalid={formik.errors.NIM}>
                                <FormLabel>NIM</FormLabel>
                                <Input
                                    value={formik.values.NIM}
                                    name="NIM"
                                    onChange={formChangeHandler}
                                />
                                <FormErrorMessage>
                                    {formik.errors.NIM}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.password}>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    value={formik.values.password}
                                    name="password"
                                    onChange={formChangeHandler}
                                    type="password"
                                />
                                <FormErrorMessage>
                                    {formik.errors.password}
                                </FormErrorMessage>
                            </FormControl>
                            <Button type="submit" colorScheme="whiteAlpha">
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Container>
        </Box>
    )
}

export default LoginPage
