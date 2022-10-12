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
        username: "",
        password: "",
      },
      onSubmit: async (values) => {
        try {
          const response = await axiosInstance.get("/users", {
            params: {
              username: values.username,
              password: values.password,
            },
          })
  
          if (!response.data.length) {
            toast({ title: "Credentials don't match", status: "error" })
            return
          }
  
          localStorage.setItem("auth_data", response.data[0].id)
          dispatch(login(response.data[0]))
        } catch (err) {
          console.log(err)
        }
      },
      validationSchema: Yup.object({
        username: Yup.string().required().min(3),
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
          <Box p="8" borderRadius="6px" border="solid 1px lightgrey" marginTop="140px">
            <Text fontWeight="bold" fontSize="4xl" mb="8">
              Login User
            </Text>
  
            <form onSubmit={formik.handleSubmit}>
              <Stack>
                <FormControl isInvalid={formik.errors.username}>
                  <FormLabel>Username</FormLabel>
                  <Input
                    value={formik.values.username}
                    name="username"
                    onChange={formChangeHandler}
                  />
                  <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.password}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={formik.values.password}
                    name="password"
                    onChange={formChangeHandler}
                    type="password"
                  />
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="green">
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
  
  