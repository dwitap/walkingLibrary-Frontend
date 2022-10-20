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
    Menu,
    MenuList,
    MenuOptionGroup,
    MenuItemOption,
    MenuButton,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { axiosInstance } from "../api"
import BookCollection from "../components/bookCollection"
import { CgChevronLeft, CgChevronRight } from "react-icons/cg"
import AdminBook from "../components/adminBook"


const BookAdmin = () => {
    const [book, setBook] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(0)
    const [rows, setRows] = useState(0)
    const [keyword, setKeyword] = useState("")
    const [keywordHandler, setKeywordHandler] = useState("")
    const maxItemsPage = 10
    const [maxPage, setMaxPage] = useState(0)
    const [order, setOrder] = useState("")

    const fetchBooks = async () => {
        try {
            const collection = await axiosInstance.get("/book", {
                params: {
                    _keywordHandler: keyword,
                    _page: pages,
                    _limit: maxItemsPage,
                    _sortDir: order,
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

                <AdminBook
                    key={val.id.toString()}
                    id={val.id}
                    image_url={val.image_url}
                    title={val.title}
                    author={val.author}
                    release_year={val.release_year}
                    genre={val.genre}
                    language={val.language}
                    fetchBooks={fetchBooks}
                />
            )
        })
    }

    const deleteBook = () => {
        
    }

    const addBook = () => {}

    const updateBook = () => {}

    const searchKey = () => {
        // event.preventDevault()
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
               
                    <Button onClick={searchKey} mr={0}>
                        Search
                    </Button>
                
            </FormControl>

            <Menu>
                <MenuButton as={Button} colorScheme='blue'>
                    Sort Title
                </MenuButton>
                <MenuList minWidth='240px'>
                    <MenuOptionGroup title='Order' type='radio' onChange={(value) => setOrder(value)}>
                    <MenuItemOption value='ASC'>Ascending</MenuItemOption>
                    <MenuItemOption value='DESC'>Descending</MenuItemOption>
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} colorScheme='green'>
                    Sort Genre
                </MenuButton>
                <MenuList minWidth='240px'>
                    <MenuOptionGroup title='genre' type='radio' onChange={(value) => setKeyword(value)}>
                    <MenuItemOption value='Fiction'>Fiction</MenuItemOption>
                    <MenuItemOption value='Self-help book'>Self-help book</MenuItemOption>
                    <MenuItemOption value='Comedy'>Comedy</MenuItemOption>
                    </MenuOptionGroup>
                </MenuList>
            </Menu>

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

export default BookAdmin
