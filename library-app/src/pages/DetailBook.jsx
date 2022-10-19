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

} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { axiosInstance } from "../api"
import { useSelector } from "react-redux"


const DetailPage = () => {
    const authSelector = useSelector((state) => state.auth)

    const [dataBook, setDataBook] = useState({})
    const toast = useToast()
    const params = useParams()

  const fetchBook = async () => {
    try {
      const response = await axiosInstance.get(`/book/${params.bookId}`);

      setDataBook(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };


    const pushToCart = async () => {
        if (!authSelector.id) {
          toast({ title: "Need to login", status: "error" })
          return
        }
    
        try { 
          let bookToAdd = {
            BookId: authSelector.id,
          }
          await axiosInstance.post("/cart", bookToAdd)
    
          toast({ title: "Book Added", status: "success" })
        } catch (err) {
          console.log(err)
          toast({ title: "Already have this book on cart", status: "error" })
        }
      } 
      
    const addToCartBtn = () => {
        pushToCart()
      }

    useEffect(() => {
        fetchBook()
    }, [])

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
                    <Button onClick={addToCartBtn}>Add to Cart</Button>
                </GridItem>
            </Grid>
            <Flex
                bgColor={"#9E7676"}
                direction={{ base: "column", md: "column", lg: "row" }}
            >
                <Box flex={"1"}>
                    <Image
                        h={"100%"}
                        src={dataBook.image_url || ""}
                        alt="book image"
                    />
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
            </Flex>
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
      </Flex>
    </Box>
  );
};

export default DetailPage;
