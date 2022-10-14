import {
  Box,
  Button,
  HStack,
  VStack,
  Image,
  Flex,
  Text,
  FormControl,
  Input,
  Square,
} from "@chakra-ui/react";

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
        <Box
          fontSize={"2xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          paddingTop={"-100px"}
        >
          Selamat datang di perpustakaan resep makanan Krusty Krab <br />
          Lebih dari 9 miliar resep masakan dapat ditemukan disini! <br />
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
          <Flex color="black">
            <Box w="505px" bg="white" fontSize="3xl">
              <Text textAlign="center" paddingTop="150px">
                Temukan Resep Favoritmu dan buat keluargamu nyaman dirumah.
              </Text>
            </Box>
            <Box bg="white" w="505px" fontSize="3xl">
              <Text textAlign="center" paddingTop="150px">
                Syarat pendaftaran mudah cukup 60 detik.
              </Text>
            </Box>
            <Box bg="white" w="505px" h="300px" fontSize="3xl">
              <Text textAlign="center" paddingTop="150px">
                Buat dan sebarkan resep terbaikmu.
              </Text>
            </Box>
          </Flex>
        </HStack>
      </VStack>

      {/* Footer */}
      <Box bg="#9E7676">
        <VStack>
          <Flex color="black">
            <Box bg="" width="760px" h="380px">
              <Text
                textAlign="center"
                fontSize="3xl"
                color="white"
                paddingTop={"30px"}
                paddingLeft="150px"
              >
                Ada masukan untuk kami?
              </Text>
              <FormControl textAlign={"center"} paddingLeft="150px">
                <Input
                  placeholder="Name"
                  width="340px"
                  marginTop="20px"
                  bg="white"
                />
              </FormControl>

              <FormControl textAlign={"center"} paddingLeft="150px">
                <Input
                  placeholder="Email"
                  width="340px"
                  marginTop="10px"
                  bg="white"
                />
              </FormControl>
              <FormControl textAlign={"center"} paddingLeft="150px">
                <Input
                  placeholder="Feedback"
                  width="340px"
                  bg="white"
                  marginTop="10px"
                  height="100px"
                />
              </FormControl>

              <Button
                bg="blue"
                marginTop="10px"
                marginLeft="475px"
                width="150px"
                _hover={""}
              >
                Send
              </Button>
            </Box>
            <Box flex="1" bg="" width="760px" h="300px" paddingTop="30px">
              <Text textAlign="center" fontSize="3xl" color="white" paddingRight={"200px"}>
                Hubungi kami
              </Text>
              <Square justifyContent={"center"}>
                <Image
                  src="https://i.ibb.co/fXPc0Mx/Krusty-Krab-free-file-1.png"
                  alt="Krusty Krab"
                  border="0"
                  height="100px"
                  paddingRight={"100px"}
                  marginTop="18px"
                />
              </Square>
              <Square
                justifyContent={"center"}
                marginLeft="40px"
                marginTop={"12px"}
                paddingRight="180px"
              >
                <Text
                  marginTop={"10px"}
                  color="white"
                  fontFamily={"sans-serif"}
                >
                  Perpustakaan Resep Bikini Bottom
                </Text>
              </Square>
              <Square justifyContent={"center"} marginLeft="40px" paddingLeft={"67px"}>
                <Text
                  marginTop={"10px"}
                  color="white"
                  fontFamily={"sans-serif"}
                >
                  Jl. Raya Bikini Bottom No. 2, Kec. Simpang kerang, Samudera
                  Pasific
                </Text>
              </Square>
              <Square justifyContent={"center"} marginLeft="40px" paddingRight={"193px"}>
                <Text
                  marginTop={"10px"}
                  fontSize
                  color="white"
                  fontFamily={"sans-serif"}
                >
                  Email: KrustyKrab69@gmail.com{" "}
                </Text>
              </Square>
            </Box>
          </Flex>
        </VStack>
      </Box>
      {/* Footer */}
    </Box>
  );
};

export default Home;
