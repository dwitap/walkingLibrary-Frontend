import {
  Td,
  Tr,
  Image,
} from "@chakra-ui/react";

const BorrowedBookComp = ({
  title,
  author,
  release_year,
  genre,
  language,
  image_url,
}) => {

  return (
    <>
      <Tr>
      <Td><Image src={image_url} alt="Image URL"/></Td>
        <Td>{title}</Td>
        <Td>{author}</Td>
        <Td>{release_year}</Td>
        <Td>{genre}</Td>
        <Td>{language}</Td>
      </Tr>
    </>
  );
};

export default BorrowedBookComp;
