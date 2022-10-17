import {
    Button,
    Input,
    FormControl,
    Text,
    Tr,
    Tbody,
    Th,
    TableContainer,
    Table,
    Thead,
    Heading,
    Grid,
    GridItem,
    Alert,
    AlertIcon,
    AlertTitle,
    HStack,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { axiosInstance } from "../api"
import BookCollection from "../components/bookCollection"
import { CgChevronLeft, CgChevronRight } from "react-icons/cg"

const Book = () => {
    const [book, setBook] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(0)
    const [rows, setRows] = useState(0)
    const [keyword, setKeyword] = useState("")
    const [keywordHandler, setKeywordHandler] = useState("")
    const maxItemsPage = 10
    const [maxPage, setMaxPage] = useState(0)

    const fetchBooks = async () => {
        try {
            const collection = await axiosInstance.get("/book", {
                params: {
                    _keywordHandler: keyword,
                    _page: pages,
                    _limit: maxItemsPage,
                    _order: "ASC",
                },
            })
            setRows(collection.data.totalRows)
            setMaxPage(Math.ceil(collection.data.totalRows) / maxItemsPage)

            if (pages === 1) {
                setBook(collection.data.data)
            } else {
                setBook(collection.data.data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const nextPage = () => {
        setPages(pages + 1)
    }

    const prevPage = () => {
        setPages(pages - 1)
    }

    const renderBooks = () => {
        return book.map((val) => {
            return (
                <BookCollection
                    key={val.id.toString()}
                    id={val.id}
                    image_url={val.image_url}
                    title={val.title}
                    author={val.author}
                    release_year={val.release_year}
                    genre={val.genre}
                    language={val.language}
                />
            )
        })
    }

    const searchKey = (event) => {
        event.preventDevault()
        setPage(0)
        setKeyword(keywordHandler)
    }

    useEffect(() => {
        fetchBooks()
    }, [pages, keyword])

    return (
        <div
            style={{
                marginLeft: "24px",
                marginRight: "24px",
                marginTop: "10px",
            }}
        >
            <FormControl>
                <Input
                    name="input"
                    value={keywordHandler}
                    onChange={(event) => setKeywordHandler(event.target.value)}
                />
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button onSubmit={searchKey} mr={0}>
                        Search
                    </Button>
                </div>
            </FormControl>

            <Heading fontWeight={"bold"} size={"lg"}>
                Books
            </Heading>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Image</Th>
                            <Th>Title</Th>
                            <Th>Author</Th>
                            <Th>Release Year</Th>
                            <Th>Genre</Th>
                            <Th>Language</Th>
                            <Th>Cart</Th>
                        </Tr>
                    </Thead>
                    <Tbody>{renderBooks()}</Tbody>
                </Table>
            </TableContainer>
            <Text>
                Page: {pages} of {maxPage}
            </Text>
            <Grid templateColumns={"repeat(3, 1fr"} mt={15}>
                <GridItem />
                <GridItem />
                <GridItem>
                    {!book.length ? (
                        <Alert status="warning">
                            <AlertIcon />
                            <AlertTitle>No post found</AlertTitle>
                        </Alert>
                    ) : null}
                    <HStack justifyContent={"end"} gap={"2px"}>
                        {pages === 0 ? null : (
                            <CgChevronLeft onClick={prevPage} color={"#9E7676"}>
                                {""}
                            </CgChevronLeft>
                        )}
                        <Text fontSize={"md"}>{pages}</Text>
                        {pages >= maxPage ? null : (
                            <CgChevronRight
                                onClick={nextPage}
                                color={"#9E7676"}
                            >
                                Next
                            </CgChevronRight>
                        )}
                    </HStack>
                </GridItem>
            </Grid>
        </div>
    )
}

export default Book
