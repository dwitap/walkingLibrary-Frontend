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
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box width={"100%"} overflow={"hidden"}>
      <Box
        position="relative"
        h={"70vh"}
        display="flex"
        alignItems="center"
        justifyContent={"center"}
      >
        <Image
          zIndex={-1}
          position="absolute"
          borderRadius="lg"
          width={"100%"}
          maxH={"70vh"}
          src="https://blog.eigeradventure.com/wp-content/uploads/2022/05/perpustakaan-terbaik-di-indonesia-3.jpg"
          alt="Krusty Krab Library"
        />
        <Box
          zIndex={99}
          fontSize={"2xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          color="white"
        >
          Selamat datang di perpustakaan resep makanan Krusty Krab <br />
          Lebih dari 9 miliar resep masakan dapat ditemukan disini! <br />
          <br />
          <Link to="/register">
            <Button colorScheme={"orange"}>Register</Button>
          </Link>
        </Box>
      </Box>
      <VStack rowGap={"10%"}>
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
    </Box>
  );
};

export default Home;
