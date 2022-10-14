import { Box, HStack, Text, Container } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../api";
import BookCart from "../components/bookCart";


const MyCart = () => {
    const [book, setBook] = useState([]);

    const fetchBooks = async () => {
        try {
          const collection = await axiosInstance.get("/book");
          setBook(collection.data.data);
        //   console.log(collection.data)
        } catch (err) {
          console.log(err);
        }
      };
      
    const renderBooks = () => {
        return book.map((val) => {
          return (
            <BookCart
              key={val.id.toString()}
              title={val.title}
              author={val.author}
              release_year={val.release_year} 
              genre={val.genre}
              language={val.language}
            />
          )
        })
      }

      useEffect(() => {
        fetchBooks();
      }, []);
      
  return (
    <Box>
      <Box p={"10"}>
        <Text fontWeight="bold" fontSize="36px">
          MY CART
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
      >
        <table border={"5px"}>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Release year</th>
            <th>Genre</th>
            <th>Language</th>
            <th></th>
          </tr>
          {renderBooks()}
        </table>
      </HStack>

      </Container>
    
    </Box>
  );
};
export default MyCart;
