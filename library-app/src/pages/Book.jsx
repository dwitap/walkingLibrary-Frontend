import {
    Box,
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
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { axiosInstance } from "../api"
import BookCollection from "../components/bookCollection"
import ReactPaginate from "react-paginate"

const Book = () => {
    const [book, setBook] = useState([])
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [pages, setPages] = useState(0)
    const [rows, setRows] = useState(0)
    const [keyword, setKeyword] = useState("")
    const [keywordHandler, setKeywordHandler] = useState("")

    const fetchBooks = async () => {
        try {
            const collection = await axiosInstance.get("/book", {
                params: {
                    _order: "DESC",
                    _keywordHandler: keyword,
                    _page: page,
                    _limit: limit,
                },
            })
            setBook(collection.data.data)
            // setPage(collection.data.page)
            setPages(collection.data.totalPage)
            setRows(collection.data.totalRows)
        } catch (err) {
            console.log(err)
        }
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
    console.log(renderBooks())

    const searchKey = (event) => {
        event.preventDevault()
        setPage(0)
        setKeyword(keywordHandler)
    }

    const changePage = ({ selected }) => {
        setPage(selected)
    }

    // const pagination = () => {}

    useEffect(() => {
        console.log(page)
        fetchBooks()
    }, [page, keyword])

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
                Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
            </Text>
            <ReactPaginate
                previousLabel={"< Prev"}
                nextLabel={"Next >"}
                pageCount={pages}
                onPageChange={changePage}
            />
        </div>
    )
}

export default Book
