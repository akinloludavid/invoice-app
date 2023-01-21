import React from "react";
import {
  Box,
  Icon,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useRouter } from "next/navigation";
const SideBar = () => {
  const router = useRouter();
  const colorModeIcon = useColorModeValue(MdLightMode, MdDarkMode);
  const { toggleColorMode } = useColorMode();
  const handleToggleColorMode = () => {
    toggleColorMode();
  };
  return (
    <Box
      bgColor={"#373B53"}
      h="100vh"
      w={["103px"]}
      left="0"
      position={"fixed"}
      borderRadius="0px 20px 20px 0px"
      cursor={"pointer"}
      pb={["24px"]}
      display="flex"
      flexDirection={["column"]}
    >
      <Box
        bgColor="#7C5DFA"
        w={["103px"]}
        h={["103px"]}
        borderRadius="0px 20px 20px 0px"
        display={"grid"}
        placeItems="center"
      >
        <Image
          zIndex={"999"}
          w={["40px"]}
          src="/assets/logo.svg"
          alt="invoice app logo"
          onClick={() => router.push("/")}
        />
      </Box>
      <Box
        mt={["-51.5px"]}
        h={["51.5px"]}
        w={["103px"]}
        bgColor="#9277FF"
        borderRadius="20px 0px 20px 0px"
      />

      <Box
        mt={["auto"]}
        display={["flex"]}
        flexDirection={["column"]}
        justifyContent="center"
        alignItems="center"
        gap={["48px"]}
      >
        <Icon
          onClick={handleToggleColorMode}
          as={colorModeIcon}
          color="#7E88C3"
          fontSize={"20px"}
        />
        <Image
          src="/assets/image-avatar.jpg"
          alt="user icon"
          w={["40px"]}
          h={["40px"]}
          borderRadius={"full"}
        />
      </Box>
    </Box>
  );
};

export default SideBar;
