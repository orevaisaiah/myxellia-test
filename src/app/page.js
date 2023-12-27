import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import Hand from "../../public/images/hand.svg";
import SalesOverview from "../components/salesoverview";
import Listing from "../components/listing";

export default function Home() {
  return (
    <Box px="78px" bg="#FBFCFC">
      <Box py="17px">
        <Flex >
          <Image src={Hand} alt="Vercel Logo" width={29} height={29} priority />
          <Text
            fontSize="20px"
            color="#191919;"
            fontWeight="600"
            className="main-font"
            textTransform="capitalize"
            ml="7px"
          >
            hi ahmed
          </Text>
        </Flex>
        <Text
          className="main-font"
          fontSize="12px"
          color="#3D3D3D;"
          fontWeight="400"
        >
          Welcome to your Dashboard
        </Text>
      </Box>
      <SalesOverview />
      <Listing />
      
    </Box>
  );
}
