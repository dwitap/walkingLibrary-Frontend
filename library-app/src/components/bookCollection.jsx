import {
  Tr,
  Td,
  Image,
  Button,
  useToast,
} from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { axiosInstance } from "../api"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const BookCollection = ({
  id,
  image_url,
  title,
  author,
  release_year,
  genre,
  language,
}) => {
  const authSelector = useSelector((state) => state.auth)

  // const confirmDeleteBtnHandler = () => {
  //   onClose()
  //   onDelete()
  // }

  const toast = useToast()

  const [book, setBook] = useState([])
//   const [addBook, setAddBook] = useState()

  const fetchBooks = async () => {
    try {
      const collection = await axiosInstance.get("/book")
      setBook(collection.data.data)
    } catch (err) {
      console.log(err)
    }
  }

  const pushToCart = async () => {
    if (!authSelector.id) {
      toast({ title: "Need to login", status: "error" })
      return
    }

    try { 
      // if()
      let bookToAdd = {
        BookId: id,
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
    fetchBooks()
  }, [])

  return (
    <>
      <Tr>
        <Td>
          <Link to={`/detail/${id}`}>
            <Image maxH={"120px"} src={image_url || ""} />
          </Link>
        </Td>
        <Td>
          <Link to={`/detail/${id}`}>{title}</Link>
        </Td>
        <Td>{author}</Td>
        <Td>{release_year}</Td>
        <Td>{genre}</Td>
        <Td>{language}</Td>
        <Td>
          <Button onClick = {addToCartBtn}>Add</Button>
        </Td>
      </Tr>
    </>
  )
}

export default BookCollection
