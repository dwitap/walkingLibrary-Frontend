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
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <Box width={"100%"} overflow={"hidden"}>
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
          <Link to="/register">
          <Button
            colorScheme={"orange"}
          >
            Register
          </Button>
          </Link>
        </Box>
        <HStack paddingTop={"10%"} spacing={100} backgroundColor={"white"}>
          <Box
            fontSize={"4xl"}
            fontWeight={"bold"}
            width={"100%"}
            m={0}
            display="block"
          >
            See our collection of secret recipe
          </Box>
          <Box>
            <Link to="/book">
            <Button colorScheme="orange">Book Collection</Button>
            </Link>
          </Box>
        </HStack>
        {/* <HStack> */}
        <Box paddingTop={"100px"} />
        <Text
          fontWeight={"bold"}
          fontSize="30px"
          textAlign={"center"}
          marginTop={"100px"}
          bgColor={"#9E7676"}
        >
          Most recommended books
        </Text>
        <Flex
          color="black"
          columnGap={"100px"}
          textAlign="justify"
          paddingTop={"50px"}
          paddingBottom={"100px"}
          paddingX={"50px"}
          fontSize="20px"
        >
          <Link to="/detail/11">
            <Box display={"flex"} flexDirection={'column'}>
              <Image
                src="https://cdn.istyle.im/images/product/web/89/11/92/00/0/000000921189_01_800.jpg"
                alt="The Hunger Games"
                height={"200px"}
                alignSelf={"center"}
              />
              <Text fontWeight={"bold"} textAlign="center" pt={"20px"}>The Hunger Games</Text>
              <Text>
                Katniss Everdeen must fight for her life in a televised survival
                competition. Learn these words from the first book of Suzanne
                Collins's dystopian trilogy.
              </Text>
            </Box>
          </Link>
          <Link to="/detail/40">
          <Box display={"flex"} flexDirection={'column'}>
            <Image
              src="https://cdn.gramedia.com/uploads/items/bumi-manusia-edit.jpg"
              alt="Bumi Manusia"
              height={"200px"}
              alignSelf={"center"}
            />
            <Text fontWeight={"bold"} textAlign="center" pt={"20px"}>Bumi Manusia</Text>
            <Text>
              Tak ada hamparan bunga mawar. Tak ada pelayaran yang menyenangkan.
              Kuanggap semuanya sebagai tantangan di hadapan seluruh umat
              manusia. Dan aku tak akan kalah darinya.
            </Text>
          </Box>
          </Link>
          <Link to="/detail/34">
          <Box display={"flex"} flexDirection={'column'}>
            <Image
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597998203l/52465880.jpg"
              alt="How To Respect Myself"
              height={"200px"}
              alignSelf={"center"}
            />
            <Text fontWeight={"bold"} textAlign="center" pt={"20px"}>How To Respect Myself</Text>
            <Text>
              Dalam hidup ini, kita punya beberapa masalah. Tapi saat kau
              mengkhawatirkannya, kau justru menggandakan masalah tersebut.{" "}
            </Text>
          </Box>
          </Link>
        </Flex>
        {/* </HStack> */}
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
                bg="orange"
                marginTop="10px"
                marginLeft="475px"
                width="150px"
                _hover={""}
              >
                Send
              </Button>
            </Box>
            <Box flex="1" bg="" width="760px" h="300px" paddingTop="30px">
              <Text
                textAlign="center"
                fontSize="3xl"
                color="white"
                paddingRight={"200px"}
              >
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
              <Square
                justifyContent={"center"}
                marginLeft="40px"
                paddingLeft={"67px"}
              >
                <Text
                  marginTop={"10px"}
                  color="white"
                  fontFamily={"sans-serif"}
                >
                  Jl. Raya Bikini Bottom No. 2, Kec. Simpang kerang, Samudera
                  Pasific
                </Text>
              </Square>
              <Square
                justifyContent={"center"}
                marginLeft="40px"
                paddingRight={"193px"}
              >
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
