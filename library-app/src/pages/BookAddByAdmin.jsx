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
  Container,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { axiosInstance } from "../api";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const AddBook = () => {
  const authSelector = useSelector((state) => state.auth);
  const toast = useToast();
  const [adminUpdate, setAdminUpdate] = useState(false);
  const params = useParams();
  const [dataBook, setDataBook] = useState({});

  const fetchBook = async () => {
    try {
      const response = await axiosInstance.get(`/book/${params.bookId}`);

      setDataBook(response.data.data);

      formik.setFieldValue("title", response.data.data.title);
      formik.setFieldValue("author", response.data.data.author);
      formik.setFieldValue("release_year", response.data.data.release_year);
      formik.setFieldValue("ISBN", response.data.data.ISBN);
      formik.setFieldValue("publisher", response.data.data.publisher);
      formik.setFieldValue("genre", response.data.data.genre);
      formik.setFieldValue("pages", response.data.data.pages);
      formik.setFieldValue("language", response.data.data.language);
    } catch (err) {
      console.log(err);
    }
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
        let newBook = {
          title: values.title,
          author: values.author,
          release_year: values.release_year,
          ISBN: values.ISBN,
          publisher: values.publisher,
          genre: values.genre,
          pages: values.pages,
          language: values.language,
        };

        await axiosInstance.post(`/book/`, newBook);

        setAdminUpdate(false);
        toast({ title: "Book added", status: "success" });
        fetchBook();
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

  return (
    <Container border={"1px solid"} marginTop="50px" p={"50px"}>
      <Text fontSize={"26px"} fontWeight="bold">
        Adding new book
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <Stack>
          <FormControl isInvalid={formik.errors.title}>
            <FormLabel>Title</FormLabel>
            <Input
              value={formik.values.title}
              defaultValue={"Otw"}
              name="title"
              onChange={formChangeHandler}
              placeholder="Book title"
            />
            <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.author}>
            <FormLabel>Author</FormLabel>
            <Input
              value={formik.values.author}
              name="author"
              onChange={formChangeHandler}
              placeholder="Book author"
            />
            <FormErrorMessage>{formik.errors.author}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.release_year}>
            <FormLabel>Release year</FormLabel>
            <Input
              value={formik.values.release_year}
              name="release_year"
              onChange={formChangeHandler}
              placeholder="Book release year"
            />
            <FormErrorMessage>{formik.errors.release_year}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.ISBN}>
            <FormLabel>ISBN</FormLabel>
            <Input
              value={formik.values.ISBN}
              name="ISBN"
              onChange={formChangeHandler}
              placeholder="Book ISBN"
            />
            <FormErrorMessage>{formik.errors.ISBN}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.publisher}>
            <FormLabel>Publisher</FormLabel>
            <Input
              value={formik.values.publisher}
              name="publisher"
              onChange={formChangeHandler}
              placeholder="Book publisher"
            />
            <FormErrorMessage>{formik.errors.publisher}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.genre}>
            <FormLabel>Genre</FormLabel>
            <Input
              value={formik.values.genre}
              name="genre"
              onChange={formChangeHandler}
              placeholder="Book genre"
            />
            <FormErrorMessage>{formik.errors.genre}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.pages}>
            <FormLabel>Pages</FormLabel>
            <Input
              value={formik.values.pages}
              name="pages"
              onChange={formChangeHandler}
              placeholder="Book pages (number)"
            />
            <FormErrorMessage>{formik.errors.pages}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.language}>
            <FormLabel>Language</FormLabel>
            <Input
              value={formik.values.language}
              name="language"
              onChange={formChangeHandler}
              placeholder="Book language"
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
    </Container>
  );
};

export default AddBook;
