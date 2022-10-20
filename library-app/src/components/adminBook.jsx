import {
    Tr,
    Td,
    useDisclosure,
    Image,
    Button,
    useToast,
  } from "@chakra-ui/react"
  import { useSelector } from "react-redux"
  import { axiosInstance } from "../api"
  import { useState } from "react"
  import { useEffect } from "react"
  import DetailPage from "../pages/DetailBook"
  import { Link } from "react-router-dom"
  
  const AdminBook = ({
    id,
    image_url,
    title,
    author,
    release_year,
    genre,
    language,
    fetchBooks
  }) => {
    const authSelector = useSelector((state) => state.auth)
  
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    // const confirmDeleteBtnHandler = () => {
    //   onClose()
    //   onDelete()
    // }
  
    const toast = useToast()
  
    const [book, setBook] = useState([])
  //   const [addBook, setAddBook] = useState()
  
    const destroyBook = async () => {
      try {
        await axiosInstance.delete(`/book/${id}`)
        fetchBooks()
        toast({ title: "Book removed", status: "success" })
      } catch (err) {
        console.log(err)
        toast({ title: "Please login first", status: "error" })
      }
    } 
  
    const removeBookBtn = () => {
      destroyBook()
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
            <Button onClick = {removeBookBtn} colorScheme="red" >Remove Book</Button>
          </Td>
        </Tr>
      </>
    )
  }
  
  export default AdminBook
  