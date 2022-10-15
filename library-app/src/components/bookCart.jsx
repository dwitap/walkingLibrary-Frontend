import {
  Button,
  Td,
  Tr,
  Image,
} from "@chakra-ui/react";

const BookCart = ({
  title,
  author,
  release_year,
  genre,
  language,
  image_url,
  onDelete,
}) => {


  const confirmDeleteBtnHandler = () => {
    onDelete();
  };

  return (
    <>
      <Tr>
        <Td><Image src={image_url} alt="Image URL"/></Td>
        <Td>{title}</Td>
        <Td>{author}</Td>
        <Td>{release_year}</Td>
        <Td>{genre}</Td>
        <Td>{language}</Td>
        <Td>
          <Button 
          colorScheme="red" 
          onClick={confirmDeleteBtnHandler} 
          ml={3}>
            Delete
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default BookCart;
