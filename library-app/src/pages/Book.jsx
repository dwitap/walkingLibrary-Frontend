import {
  Box,
  Button,
  Container,
  HStack,
  VStack,
  Image,
  Input,
  FormControl,
  Text,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { axiosInstance } from "../api"
import BookCollection from "../components/bookCollection"

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
          _query: keyword,
          _page: page,
          _limit: limit,
        },
      })
      setBook(collection.data.data)
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

  const changePage = ({ selected }) => {
    setPage(selected)
console.log(selected)  
}
  

  useEffect(() => {
    console.log(page)
    fetchBooks()
  }, [page, keyword])

  return (
    <>
      <FormControl>
        <Input
          name="input"
          value={keywordHandler}
          onChange={(event) => setKeywordHandler(event.target.value)}
        />
        <Button onSubmit={searchKey}>Search</Button>
      </FormControl>

//   title, author, release_year, genre, language

      <Box fontWeight={"bold"}>Books</Box>
      <HStack>
        <Box>title</Box>
        <Box>author</Box>
        <Box>release year</Box>
        <Box>genre</Box>
        <Box>language</Box>
      </HStack>
      {renderBooks()}

      <Text>
        Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
      </Text>
      <Box>
        <ReactPaginate
          previousLabel={"< Prev"}
          nextLabel={"Next >"}
          pageCount={pages}
          onPageChange={changePage}
        />
      </Box>
    </>
  )
}

export default Book
