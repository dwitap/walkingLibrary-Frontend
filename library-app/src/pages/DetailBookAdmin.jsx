import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  useToast,
  FormControl,
  Stack,
  Input,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../api";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup"
import { useFormik } from "formik";
import { detailsBook } from "../redux/features/bookSlice"

const DetailPage = () => {
  const authSelector = useSelector((state) => state.auth);
  const [dataBook, setDataBook] = useState({});
  const toast = useToast();
  const params = useParams();
  const [adminUpdate, setAdminUpdate] = useState(false)
  const dispatch = useDispatch()



  const fetchBook = async () => {
    try {
      const response = await axiosInstance.get(`/book/${params.bookId}`);

      setDataBook(response.data.data);

      formik.setFieldValue("title", response.data.data.title)
      formik.setFieldValue("author", response.data.data.author)
      formik.setFieldValue("release_year", response.data.data.release_year)
      formik.setFieldValue("ISBN", response.data.data.ISBN)
      formik.setFieldValue("publisher", response.data.data.publisher)
      formik.setFieldValue("genre", response.data.data.genre)
      formik.setFieldValue("pages", response.data.data.pages)
      formik.setFieldValue("language", response.data.data.language)

    } catch (err) {
      console.log(err);
    }
  };

  const pushToCart = async () => {
    if (!authSelector.id) {
      toast({ title: "Need to login", status: "error" });
      return;
    }

    try {
      let bookToAdd = {
        BookId: authSelector.id,
      };
      await axiosInstance.post("/cart", bookToAdd);

      toast({ title: "Book Added", status: "success" });
    } catch (err) {
      console.log(err);
      toast({ title: "Already have this book on cart", status: "error" });
    }
  };

  const addToCartBtn = () => {
    pushToCart();
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      release_year: "",
      ISBN: "",
      publisher: "",
      genre: "",
      pages: "",
      language: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axiosInstance.get("/users", {
          params: {
            title: values.title,
            author: values.author,
            release_year: values.release_year,
            ISBN: values.ISBN,
            publisher: values.publisher,
            genre: values.genre,
            pages: values.pages,
            language: values.language,
          },
        });

        let newUser = {
            username: values.username,
            email: values.email,
            profile_picture: values.profile_picture,
          }

          await axiosInstance.patch(`/detail/${authSelector.id}`, newUser)


        localStorage.setItem("auth_data", response.data[0].id);
        dispatch(detailsBook(response.data[0]));
        setAdminUpdate(false)
        toast({ title: "Profile edited", status:"success"})
      } catch (err) {
        console.log(err);
      }
    },
    validationSchema: Yup.object({
      title: Yup.string().required().min(3),
      author: Yup.string().required(),
      release_year: Yup.string().required(),
      ISBN: Yup.string().required(),
      publisher: Yup.string().required(),
      genre: Yup.string().required(),
      pages: Yup.number().required(),
      language: Yup.string().required(),
    }),
    validateOnChange: false,
  });

  const formChangeHandler = ({ target }) => {
    const { name, value } = target;
    formik.setFieldValue(name, value);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <Box p={"40px"} pt={"5px"} bgColor={"#FFF8EA"}>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem w="100%">
          <Heading p={5}>BOOK DETAILS</Heading>
        </GridItem>
        <GridItem
          w="100%"
          display={"flex"}
          justifyContent={"flex-end"}
          pt={"5"}
        >
        {!adminUpdate ? (
          <Button onClick={addToCartBtn}>Add to Cart</Button>
          ) : ( null )}

          </GridItem>
      </Grid>

      {!adminUpdate ? (
        <Flex
          bgColor={"#9E7676"}
          direction={{ base: "column", md: "column", lg: "row" }}
        >
          <Box flex={"1"}>
            <Image h={"100%"} src={dataBook.image_url || ""} alt="book image" />
          </Box>
          <Box
            flex={"1"}
            w={"full"}
            h={"full"}
            p={5}
            m={10}
            alignItems={"flex-start"}
            color={"white"}
          >
            <Heading size={"lg"}>Title</Heading>
            <Text fontSize={"2xl"}>{dataBook.title}</Text>
            <br />
            <Heading size={"lg"}>Author</Heading>
            <Text fontSize={"2xl"}>{dataBook.author}</Text>
            <br />
            <Heading size={"lg"}>Release year</Heading>
            <Text fontSize={"2xl"}>{dataBook.release_year}</Text>
            <br />
            <Heading size={"lg"}>ISBN</Heading>
            <Text fontSize={"2xl"}>{dataBook.ISBN}</Text>
            <br />
            <Heading size={"lg"}>Publisher</Heading>
            <Text fontSize={"2xl"}>{dataBook.publisher}</Text>
            <br />
            <Heading size={"lg"}>Genre</Heading>
            <Text fontSize={"2xl"}>{dataBook.genre}</Text>
            <br />
            <Heading size={"lg"}>Pages</Heading>
            <Text fontSize={"2xl"}>{dataBook.pages}</Text>
            <br />
            <Heading size={"lg"}>Language</Heading>
            <Text fontSize={"2xl"}>{dataBook.language}</Text>
          </Box>
        <Box>
          <Button mt="8" mr="8"  onClick={() => setAdminUpdate(true)}>
            Edit Book Detail
          </Button>
          <br />
          <Button mt="10" mr="8"  onClick={() => setAdminUpdate(true)}>
            Delete Book
          </Button>
          </Box>
        </Flex>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Stack>
            <FormControl isInvalid={formik.errors.title}>
              <FormLabel>Title</FormLabel>
              <Input
                value={formik.values.title}
                defaultValue={"Otw"}
                name="title"
                onChange={formChangeHandler}
              />
              <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.author}>
              <FormLabel>Author</FormLabel>
              <Input
                value={formik.values.author}
                name="author"
                onChange={formChangeHandler}
              />
              <FormErrorMessage>{formik.errors.author}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.release_year}>
              <FormLabel>Release year</FormLabel>
              <Input
                value={formik.values.release_year}
                name="release_year"
                onChange={formChangeHandler}
              />
              <FormErrorMessage>{formik.errors.release_year}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.ISBN}>
              <FormLabel>ISBN</FormLabel>
              <Input
                value={formik.values.ISBN}
                name="ISBN"
                onChange={formChangeHandler}
              />
              <FormErrorMessage>{formik.errors.ISBN}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.publisher}>
              <FormLabel>Publisher</FormLabel>
              <Input
                value={formik.values.publisher}
                name="publisher"
                onChange={formChangeHandler}
              />
              <FormErrorMessage>{formik.errors.publisher}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.genre}>
              <FormLabel>Genre</FormLabel>
              <Input
                value={formik.values.genre}
                name="genre"
                onChange={formChangeHandler}
              />
              <FormErrorMessage>{formik.errors.genre}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.pages}>
              <FormLabel>Pages</FormLabel>
              <Input
                value={formik.values.pages}
                name="pages"
                onChange={formChangeHandler}
              />
              <FormErrorMessage>{formik.errors.pages}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.language}>
              <FormLabel>Language</FormLabel>
              <Input
                value={formik.values.language}
                name="language"
                onChange={formChangeHandler}
              />
              <FormErrorMessage>{formik.errors.language}</FormErrorMessage>
            </FormControl>
            <Button 
            type="submit" 
            colorScheme="teal"
            onClick={formik.handleSubmit}
            >
              Save
            </Button>
          </Stack>
        </form>
      )}
    </Box>
  );
};

export default DetailPage;
