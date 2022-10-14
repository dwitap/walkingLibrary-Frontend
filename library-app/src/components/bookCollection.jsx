import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"

import { useFormik } from "formik"
import { BsThreeDots } from "react-icons/bs"
import { useSelector } from "react-redux"
import * as Yup from "yup"
import { axiosInstance } from "../api"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const BookCollection = ({ title, author, release_year, genre, language }) => {
  const authSelector = useSelector((state) => state.auth)

  const { isOpen, onOpen, onClose } = useDisclosure()

  // const confirmDeleteBtnHandler = () => {
  //   onClose()
  //   onDelete()
  // }

  const [book, setBook] = useState([])

  const fetchBooks = async () => {
    try {
      const collection = await axiosInstance.get("/book")
      setBook(collection.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <>
      
      <HStack>
        <Box>{title}</Box>
        <Box>{author}</Box>
        <Box>{release_year}</Box>
        <Box>{genre}</Box>
        <Box>{language}</Box>
      </HStack>
    </>
  )
}

export default BookCollection
