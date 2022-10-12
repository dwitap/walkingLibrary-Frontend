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
  import * as Yup from "yup"
  import { axiosInstance } from "../api"
  
  const RegisterPage = () => {
    const toast = useToast()
  
    const formik = useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        try {
          // 1. Email unique
          // 2. Username unique
          const emailResponse = await axiosInstance.get("/users", {
            params: {
              email: values.email,
            },
          })
  
          if (emailResponse.data.length) {
            toast({ title: "Email has already been used", status: "error" })
            return
          }
  
          const usernameResponse = await axiosInstance.get("/users", {
            params: {
              username: values.username,
            },
          })
  
          if (usernameResponse.data.length) {
            toast({ title: "Username has already been used", status: "error" })
            return
          }
  
          let newUser = {
            username: values.username,
            email: values.email,
            password: values.password,
            role: "user",
            profile_picture: "",
          }
  
          await axiosInstance.post("/users", newUser)
  
          toast({
            title: "Registration successful",
            status: "success",
          })
        } catch (err) {
          console.log(err)
        }
      },
      validationSchema: Yup.object({
        username: Yup.string().required().min(3),
        email: Yup.string().required().email(),
        password: Yup.string()
          .required()
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
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
          <Box p="8" borderRadius="6px" border="solid 1px lightgrey" marginTop="100px">
            <Text fontWeight="bold" fontSize="4xl" mb="8">
              Register User
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
                <FormControl isInvalid={formik.errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    value={formik.values.email}
                    name="email"
                    onChange={formChangeHandler}
                    type="email"
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
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
  
  