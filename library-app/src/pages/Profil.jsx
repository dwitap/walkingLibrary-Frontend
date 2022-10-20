import { Text, Box, ListItem, UnorderedList } from "@chakra-ui/react";

const Profil = () => {
  return (
    <Box marginLeft={"40px"} marginRight="40px">
      <Text fontSize={"3xl"} fontFamily="heading" textAlign="center" marginTop={"50px"} fontWeight="bold">
        VISI
      </Text>
      <Text fontSize={"20px"} fontFamily="body" marginTop={"20px"} >
        Menyediakan layanan, menghimpun pustaka resep makanan terbaik sedunia
        bagi masyarakat laut bikini bottom untuk mendukung pengayaan variasi
        menu makanan dan tercapainya kesetaraan serta kesejahteraan resep harian
        menu makanan masyarakat bikini bottom.
      </Text>
      <Text fontSize={"3xl"} fontFamily="heading" textAlign={"center"} marginTop="50px" fontWeight="bold">
        MISI
      </Text>
      <UnorderedList fontFamily={"body"} fontSize="20px" marginTop={"20px"}>
        <ListItem>
          Menunjang variasi menu makanan harian masyarakat Bikini Bottom.
        </ListItem>
        <ListItem>
          Menjadi rujukan pencarian resep makanan terbaik di Bikini Bottom.
        </ListItem>
        <ListItem>
          Mengembangkan, mengorganisasi, dan mendayagunakan koleksi resep
          makanan bagi masyrakat Bikini Bottom sehingga tercipta masyarakat puas
          akan cita rasa.
        </ListItem>
        <ListItem>
          Menyebarluaskan informasi, khususnya disekitaran Kota Bikini Bottom
          agar di manfaatkan untuk pembuatan makanan sehari hari.
        </ListItem>
        <ListItem>
          Menjalin kerja sama dengan berbabagi perpustakaan baik didalam dan
          diluar laut untuk memperoleh informasi bagi masyarakat Bikini Bottom.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Profil;
