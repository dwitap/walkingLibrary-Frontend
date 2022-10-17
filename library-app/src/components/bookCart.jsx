import {
  Button,
  Td,
  Tr,
} from "@chakra-ui/react";

const BookCollection = ({
  title,
  author,
  release_year,
  genre,
  language,
  onDelete,
}) => {


  const confirmDeleteBtnHandler = () => {
    onDelete();
  };

  return (
    <>
      <Tr>
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

export default BookCollection;
