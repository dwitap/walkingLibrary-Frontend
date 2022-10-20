import { Box, Button, Container, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <Container
      border={"1px solid"}
      borderRadius="20px"
      maxWidth="750px"
      my="100px"
      bgColor={"#9E7676"}
    >
      <Text fontSize={"30px"} fontWeight="bold" mt="20px" color="white">
        Admin dashboard
      </Text>
      <HStack display={"flex"} textAlign="center" justify-content="center">
        <Box flex={1} mt="50px" mb="50px" pr="50px">
          <Text color="white">
            Welcome to krustry krab library. You are an admin. Aye aye captain!
            I can't hear youuuu. Aye aye captain!
          </Text>
        </Box>
        <Box flex={1}>
          <VStack>
            <Link to="/admin/book"><Button>Add new book</Button></Link>
            <Link to="/admin/book"><Button>Edit book details</Button></Link>
            <Link to="/admin/book"><Button>Delete books</Button></Link>
          </VStack>
        </Box>
      </HStack>
    </Container>
  );
};

export default AdminDashboard;
