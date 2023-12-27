import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import SupportOne from "../../../public/images/support-1.svg";
import SupportTwo from "../../../public/images/support-2.svg";
import Image from "next/image";

const Support = () => {
  return (
    <Flex
      w="240px"
      h="46px"
      borderRadius="70px"
      pos="fixed"
      zIndex="999"
      bottom="30px"
      right="20px"
      bg="#4545FE"
      justify="center"
      align="center"
      gap="8px"
      boxShadow="4px 4px 8px 0px #7B9D9D26;"
      className="support-assistant"
    >
      <Image
        src={SupportOne}
        alt="Vercel Logo"
        width={18}
        height={18}
        priority
      />
      <Text
        className="main-font"
        fontSize="20px"
        fontWeight="400"
        color="#FFFFFF"
      >
        Veerge Assistant
      </Text>
      <Image
        src={SupportTwo}
        alt="Vercel Logo"
        width={18}
        height={18}
        priority
      />
    </Flex>
  );
};

export default Support;
