import { Box, Button, Container, HStack, VStack, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box width={"100%"}>
      <VStack rowGap={"10%"}>
        <Image
          borderRadius="lg"
          width={"100%"}
          height={"500px"}
          src="https://blog.eigeradventure.com/wp-content/uploads/2022/05/perpustakaan-terbaik-di-indonesia-3.jpg"
          alt="Krusty Krab Library"
        />
        <Box fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"} paddingTop={"-100px"}>
          Perpustakaan luar biasa. <br />
          Lebih dari 9 Billion collection resep masakan dapat ditemukan disini{" "}
          <br />
          <br />
          <Button colorScheme={"orange"}>Register</Button>
        </Box>
        <HStack paddingTop={"10%"} spacing={100} backgroundColor={"white"}>
          <Box fontSize={"4xl"} fontWeight={"bold"} width={"100%"}>
            See our collection of secret recipe
          </Box>
          <Box>
            <Button colorScheme="orange">Book Collection</Button>
          </Box>
        </HStack>
        <HStack>
            <Container bg={"tomato"} height={"300px"} maxW={'100%'} paddingRight={"1000"} w={"100%"}>
                    Masih error pak. Mohon di koreksi
            </Container>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Home;
