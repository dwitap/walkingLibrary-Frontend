import { Box, Button, Container, HStack, VStack, Image } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { axiosInstance } from "../api"
import BookCollection from "../components/bookCollection"

const Book = () => {
  const [book, setBook] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [page, setPage] = useState(1)

  const fetchBooks = async () => {
    try {
      const response = await axiosInstance.get("/book", {
        params: {
          _order: "DESC",
          _limit: 2,
          _page: page,
        },
      })

    //   setTotalCount(response.data.data)

    setBook(response.data.data)
    // if (page === 1) {
    //   } else {
    //     setPosts([...posts, ...response.data.data])
    //   }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

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
//   title, author, release_year, genre, language

  

  return (
    <>
      <Box fontWeight={"bold"}>Books</Box>
      <HStack>
        <Box>title</Box>
        <Box>author</Box>
        <Box>release year</Box>
        <Box>genre</Box>
        <Box>language</Box>
      </HStack>
      {renderBooks()}
    </>
  )
}

export default Book
