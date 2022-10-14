import {
    Box,
    Image,
    Container,
    Flex,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { detailsBook } from "../redux/features/bookSlice"
import { useParams } from "react-router-dom"
import { axiosInstance } from "../api"

const DetailPage = () => {
    const [dataBook, setDataBook] = useState({})

    const params = useParams()

    const fetchBook = async () => {
        try {
            const book = await axiosInstance.get("/book", {
                params: {
                    id: params.id,
                },
            })

            const bookId = book.data.data.filter((val) => {
                return val.id == params.id
            })

            const response = await axiosInstance.get(`/book/12`)

            setDataBook(response.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchBook()
    }, [])

    return (
        <Box p={"40px"} bgColor={"#FFF8EA"}>
            <Heading p={5}>BOOK DETAILS</Heading>
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
    )
}

export default DetailPage

// {
//     title,
//     author,
//     release_year,
//     ISBN,
//     publisher,
//     genre,
//     pages,
//     language,
//     image_url
// }
