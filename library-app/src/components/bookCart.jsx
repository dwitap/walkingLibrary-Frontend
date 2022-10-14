// import { useSelector } from "react-redux";
import { axiosInstance } from "../api";
import { useState } from "react";
import { useEffect } from "react";

const BookCollection = ({ title, author, release_year, genre, language }) => {
  // const authSelector = useSelector((state) => state.auth);

  // const { isOpen, onOpen, onClose } = useDisclosure();

  // const confirmDeleteBtnHandler = () => {
  //   onClose()
  //   onDelete()
  // }

  const [book, setBook] = useState([]);

  const fetchBooks = async () => {
    try {
      const collection = await axiosInstance.get("/book");
      setBook(collection.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <tr>
        <th></th>
        <td>{title}</td>
        <td>{author}</td>
        <td>{release_year}</td>
        <td>{genre}</td>
        <td>{language}</td>
        <th></th>
      </tr>
    </>
  );
};

export default BookCollection;
