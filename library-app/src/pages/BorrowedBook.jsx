import {
    Box,
    HStack,
    Text,
    Container,
    Th,
    Tr,
    Table,
    Button,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useEffect } from "react";
import { Link } from "react-router-dom";

  import { axiosInstance } from "../api";
  import BorrowedBookComp from "../components/borrowedBookComp"
  
  const BorrowedBook = () => {
    const [book, setBook] = useState([]);
    const toast = useToast()
    
    const fetchBooks = async () => {
      try {
        const collection = await axiosInstance.get("/cart/borrowed");
        setBook(collection.data.data);
        // console.log(collection.data.data);
        // setBook(collection.data.data[i].Book);
        // console.log(collection.data.data[i].Book)
      } catch (err) {
        console.log(err);
      }
    };
  
  
    const renderBooks = () => {
      return book.map((val) => {
        return (
          <BorrowedBookComp
            key={val.id.toString()}
            id={val.Book.id}
            image_url={val.Book.image_url}
            title={val.Book.title}
            author={val.Book.author}
            release_year={val.Book.release_year}
            genre={val.Book.genre}
            language={val.Book.language}
          />
        );
      });
    };
    
    const confirmReturnHandler = async (id) => {
      try {
        await axiosInstance.delete("/cart");
        

        fetchBooks();
        toast({ title: "Books has been returned. Thank you", status: "success" });

      } catch (err) {
        console.log(err);
      }
    };
    
    useEffect(() => {
      fetchBooks();
    }, []);
  
    return (
      <Box>
        <Box p={"10"}>
          <Text fontWeight="bold" fontSize="36px">
            BORROWED ITEMS
          </Text>
        </Box>
        <Container maxWidth="900px">
          <HStack
            spacing={8}
            shadow="md"
            display="grid"
            grid-template-columns="1fr 3fr 1fr 1fr 1fr 1fr 1fr"
            gap={"50"}
            textAlign={"center"}
            padding="20px"
          >
            <Table
              style={{ border: "1px solid", paddingTop: "100px" }}
              variant="striped"
              colorScheme="black"
              textAlign={"center"}
            >
              <Tr>
                <Th>Image</Th>
                <Th>Title</Th>
                <Th>Author</Th>
                <Th>Release year</Th>
                <Th>Genre</Th>
                <Th>Language</Th>
              </Tr>
              {renderBooks()}
            </Table>
          </HStack>
          <Link to="/">

          <Button
            colorScheme={"green"}
            alignItems="center"
            justifyContent="center"
            width={"100%"}
            onClick={confirmReturnHandler}
          >
            Return Book
          </Button>
          </Link>

        </Container>
      </Box>
    );
  };
  export default BorrowedBook;
  