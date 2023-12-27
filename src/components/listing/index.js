import React from "react";
import {
  Heading,
  Button,
  Card,
  CardBody,
  CardHeader,
  Box,
  Flex,
  Text,
  Highlight,
} from "@chakra-ui/react";
import Image from "next/image";
import ListingOne from "../../../public/images/listing-1.svg";
import ListingTwo from "../../../public/images/listing-2.svg";
import ListingThree from "../../../public/images/listing-3.svg";

import Left from "../../../public/images/left.svg";
import Right from "../../../public/images/right.svg";
import Btn from "../../../public/images/btn.svg";

const ListingOverview = () => {
  return (
    <Flex p="25px">
      <Flex
        direction="column"
        w="475px"
        h="287px"
        borderRadius="16px"
        bg="#ffffff"
        p="15px"
        boxShadow=" 0 5px 4px #00000005"
      >
        <Heading
          className="main-font"
          fontSize="18px"
          fontWeight="600"
          color="#191919"
          mb="15px"
        >
          Listing Overview
        </Heading>
        <Flex flexWrap="wrap" justify="space-between">
          <Card w="46%" mb="20px" boxShadow="none">
            <CardHeader p="0">
              <Heading
                className="main-font"
                fontSize="10px"
                fontWeight="400"
                color="#191919"
                mb="10px"
                pb="10px"
                w="100%"
                borderBottom="1px solid #E4E4E4"
              >
                Most viewed
              </Heading>
            </CardHeader>
            <CardBody p="0" display="flex">
              <Flex
                w="67px"
                h="68px"
                justify="center"
                align="center"
                borderRadius="12px"
                border="1px solid #12D8A0"
                bg="#F5F5F5"
              >
                <Image
                  src={ListingOne}
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                  priority
                />
              </Flex>
              <Text
                className="main-font"
                fontSize="16px"
                fontWeight="600"
                color="#191919"
                ml="15px"
              >
                None
              </Text>
            </CardBody>
          </Card>
          <Card w="46%" mb="20px" boxShadow="none">
            <CardHeader p="0">
              <Heading
                className="main-font"
                fontSize="10px"
                fontWeight="400"
                color="#191919"
                mb="10px"
                pb="10px"
                w="100%"
                borderBottom="1px solid #E4E4E4"
              >
                Most shared
              </Heading>
            </CardHeader>
            <CardBody p="0" display="flex">
              <Flex
                w="67px"
                h="68px"
                justify="center"
                align="center"
                borderRadius="12px"
                border="1px solid #4545FE"
                bg="#F5F5F5"
              >
                <Image
                  src={ListingOne}
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                  priority
                />
              </Flex>
              <Text
                className="main-font"
                fontSize="16px"
                fontWeight="600"
                color="#191919"
                ml="15px"
              >
                None
              </Text>
            </CardBody>
          </Card>
          <Flex w="100%" justify="space-between">
            <Card w="46%" boxShadow="none">
              <CardHeader p="0">
                <Heading
                  className="main-font"
                  fontSize="10px"
                  fontWeight="400"
                  color="#191919"
                  mb="10px"
                >
                  Most watchlisted
                </Heading>
              </CardHeader>
              <CardBody p="0" display="flex">
                <Flex
                  w="67px"
                  h="68px"
                  justify="center"
                  align="center"
                  borderRadius="12px"
                  border="1px solid #FF9103"
                  bg="#F5F5F5"
                >
                  <Image
                    src={ListingOne}
                    alt="Vercel Logo"
                    width={30}
                    height={30}
                    priority
                  />
                </Flex>
                <Text
                  className="main-font"
                  fontSize="16px"
                  fontWeight="600"
                  color="#191919"
                  ml="15px"
                >
                  None
                </Text>
              </CardBody>
            </Card>
            <Card
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              w="46%"
              h="68px"
              mt="25px"
              p="10px"
              boxShadow="none"
              borderRadius="12px"
              border="1px solid #E4E4E4"
            >
              <Box>
                <Heading
                  className="main-font"
                  fontSize="24px"
                  fontWeight="400"
                  color="#191919"
                  mb="5px"
                >
                  0
                </Heading>
                <Text
                  className="main-font"
                  fontSize="10px"
                  fontWeight="400"
                  color="#191919"
                >
                  Number of watchlists
                </Text>
              </Box>
              <Image
                src={ListingTwo}
                alt="Vercel Logo"
                width={30}
                height={30}
                priority
                style={{ width: "30px", height: "30px" }}
              />
            </Card>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        w="418px"
        h="287px"
        borderRadius="16px"
        bg="#ffffff"
        px="15px"
        py="24px"
        mx="20px"
        boxShadow=" 0 5px 4px #00000005"
      >
        <Flex align="center" justify="space-between">
          <Heading
            className="main-font"
            fontSize="28px"
            display="block"
            fontWeight="600"
            color="#191919"
          >
            <Highlight query=".00" styles={{ color: "#CBCBCB" }}>
              &#8358; 0.00
            </Highlight>
          </Heading>
          <Button
            className="main-font"
            w="65px"
            h="18px"
            fontSize="12px"
            fontWeight="500"
            color="#CBCBCB"
            bg="none"
          >
            View all{" "}
            <Image
              src={Btn}
              alt="Vercel Logo"
              width={5.83}
              height={9.55}
              priority
              style={{ marginLeft: "8px" }}
            />
          </Button>
        </Flex>
        <Flex direction="column">
          <Text
            className="main-font"
            color="#606060"
            fontSize="14px"
            mt="10px"
            fontWeight="400"
          >
            Total Outstanding Balance
          </Text>
          <Flex mt="25px">
            <Flex
              w="154px"
              h="155px"
              justify="center"
              align="center"
              borderRadius="12px"
              border="1px solid #4545FE"
              bg="#F5F5F5"
            >
              <Image
                src={ListingThree}
                alt="Vercel Logo"
                width={83.33}
                height={83.33}
                priority
              />
            </Flex>
            <Box pl="20px">
              <Text
                className="main-font"
                fontSize="20px"
                fontWeight="600"
                color="#191919"
                mt="-10px"
              >
                None
              </Text>
              <Box mt="40px">
                <Heading
                  className="main-font"
                  fontSize="14px"
                  fontWeight="600"
                  color="#FF6A6A"
                >
                  &#8358; 0.00
                </Heading>
                <Text
                  className="main-font"
                  fontSize="12px"
                  fontWeight="400"
                  color="#606060"
                >
                  Outstanding Balance
                </Text>
              </Box>
              <Flex
                justify="flex-end"
                align="center"
                gap="5px"
                mt="30px"
                mr="-40px"
              >
                <Text
                  className="main-font"
                  fontSize="14px"
                  fontWeight="400"
                  color="#606060;
                  "
                >
                  1/5
                </Text>
                <Box bg="none" cursor="pointer">
                  {" "}
                  <Image
                    src={Left}
                    alt="Vercel Logo"
                    width={24}
                    height={24}
                    priority
                  />
                </Box>
                <Box bg="none" cursor="pointer">
                  <Image
                    src={Right}
                    alt="Vercel Logo"
                    width={24}
                    height={24}
                    priority
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        w="350px"
        h="287px"
        borderRadius="16px"
        bg="#ffffff"
        px="15px"
        py="20px"
        mx="20px"
        boxShadow=" 0 5px 4px #00000005"
      >
        <Box mb="10px">
          <Text
            className="main-font"
            fontSize="16px"
            display="block"
            fontWeight="600"
            color="#12D8A0"
            mb="5px"
          >
            Top Selling
          </Text>

          <Heading
            className="main-font"
            fontSize="28px"
            fontWeight="600"
            color="#191919"
          >
            <Highlight query=".00" styles={{ color: "#CBCBCB" }}>
              &#8358; 0.00
            </Highlight>
          </Heading>
          <Text
            className="main-font"
            fontSize="14px"
            fontWeight="400"
            color="#606060"
          >
            Total Sold
          </Text>
        </Box>
        <Flex>
          <Flex
            w="154px"
            h="155px"
            justify="center"
            align="center"
            borderRadius="12px"
            border="1px solid #4545FE"
            bg="#F5F5F5"
          >
            <Image
              src={ListingThree}
              alt="Vercel Logo"
              width={83.33}
              height={83.33}
              priority
            />
          </Flex>
          <Box pl="20px">
            <Text
              className="main-font"
              fontSize="20px"
              fontWeight="600"
              color="#191919"
              mt="-10px"
            >
              None
            </Text>
            <Heading
              className="main-font"
              fontSize="16px"
              fontWeight="600"
              color="#CBCBCB"
              mt="35px"
            >
              0
            </Heading>
            <Text className="main-font" fontSize="12px" fontWeight="400" color="#606060">
              Whole units sold
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ListingOverview;
