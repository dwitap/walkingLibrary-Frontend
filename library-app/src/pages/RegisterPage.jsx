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
import { axiosInstance } from "../api"

const RegisterPage = () => {
    const toast = useToast()

    const formik = useFormik({
        initialValues: {
            NIM: "",
            username: "",
            email: "",
            password: "",
        },
        onSubmit: async ({ NIM, username, email, password }) => {
            try {
                const response = await axiosInstance.post("/user/register", {
                    NIM,
                    username,
                    email,
                    password,
                })

                toast({
                    title: "Registration successful",
                    description: response.data.message,
                    status: "success",
                })
            } catch (err) {
                toast({
                    title: "Registration failed",
                    description: err.response.data.message,
                    status: "error",
                })
                console.log(err)
            }
        },
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
                        Create yout account
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
                            <FormControl isInvalid={formik.errors.username}>
                                <FormLabel>Username</FormLabel>
                                <Input
                                    value={formik.values.username}
                                    name="username"
                                    onChange={formChangeHandler}
                                />
                                <FormErrorMessage>
                                    {formik.errors.username}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.email}>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    value={formik.values.email}
                                    name="email"
                                    onChange={formChangeHandler}
                                    type="email"
                                />
                                <FormErrorMessage>
                                    {formik.errors.email}
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
                                Register
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Container>
        </Box>
    )
}

export default RegisterPage
