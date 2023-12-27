import React from "react";
import {
  Input,
  Heading,
  Button,
  Divider,
  Card,
  CardBody,
  CardHeader,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Left from "../../../public/images/left.svg";
import Right from "../../../public/images/right.svg";
import CardIconOne from "../../../public/images/card-icon-1.svg";
import CardIconTwo from "../../../public/images/card-icon-2.svg";
import Property from "../../../public/images/property.svg";
import Customer from "../../../public/images/customer.svg";
import Btn from "../../../public/images/btn.svg";

const SalesOverview = () => {
  return (
    <Flex justify="space-between">
      <Box
        w="800px"
        h="325px"
        borderRadius="16px"
        bg="#ffffff"
        boxShadow=" 0 8px 4px #00000005; "
      >
        <Flex justify="space-between" px="25px" pt="25px">
          <Box>
            <Heading
              className="main-font"
              fontSize="20px"
              fontWeight="600"
              color="#191919"
            >
              Sales Overview
            </Heading>
            <Text
              className="main-font"
              color="#606060"
              fontSize="12px"
              fontWeight="400"
              mt="15px"
            >
              Showing overview Jan 2022 - Sep 2022
            </Text>
          </Box>
          <Input
            className="main-font"
            placeholder="View Transaction"
            fontSize="12px"
            color="#919191"
            w="177px"
            h="46px"
            bg="none"
          />
        </Flex>
        <Box>
          <Flex justify="flex-end" gap="5px" px="25px" mt="5px" mb="15px">
            <Button
              className="main-font"
              w="80px"
              h="33px"
              bg="none"
              fontSize="14px"
              fontWeight="400"
            >
              1 Week
            </Button>
            <Button
              className="main-font"
              w="80px"
              h="33px"
              bg="none"
              fontSize="14px"
              fontWeight="400"
            >
              1 Month
            </Button>
            <Button
              className="main-font"
              w="80px"
              h="33px"
              bg="none"
              fontSize="14px"
              fontWeight="400"
            >
              1 Year
            </Button>
          </Flex>
          <Divider mb="15px" />
          <Flex h="155px" px="20px">
            <Flex align="center">
              <Box w="18px" cursor="pointer" h="18px">
                <Image
                  src={Left}
                  alt="Vercel Logo"
                  width={17}
                  height={17}
                  priority
                />
              </Box>
              <Flex
                h="155px"
                display="flex"
                direction="column"
                justify="flex-end"
              >
                <Divider w="311px" mb="20px" />
                <Box display="flex" w="310px" gap="20px">
                  <Text
                    className="main-font"
                    fontSize="10px"
                    fontWeight="500"
                    color="#919191"
                  >
                    Jan
                  </Text>
                  <Text
                    className="main-font"
                    fontSize="10px"
                    fontWeight="500"
                    color="#919191"
                  >
                    Feb
                  </Text>
                  <Text
                    className="main-font"
                    fontSize="10px"
                    fontWeight="500"
                    color="#919191"
                  >
                    Mar
                  </Text>
                  <Text
                    className="main-font"
                    fontSize="10px"
                    fontWeight="500"
                    color="#919191"
                  >
                    Apr
                  </Text>
                  <Text
                    className="main-font"
                    fontSize="10px"
                    fontWeight="500"
                    color="#919191"
                  >
                    May
                  </Text>
                  <Text
                    className="main-font"
                    fontSize="10px"
                    fontWeight="500"
                    color="#919191"
                  >
                    Jun
                  </Text>
                  <Text
                    className="main-font"
                    fontSize="10px"
                    fontWeight="500"
                    color="#919191"
                  >
                    Jul
                  </Text>
                  <Text
                    className="main-font"
                    fontSize="10px"
                    fontWeight="500"
                    color="#919191"
                  >
                    Aug
                  </Text>
                  <Text
                    className="main-font"
                    fontSize="10px"
                    fontWeight="500"
                    color="#919191"
                  >
                    Sep
                  </Text>
                </Box>
              </Flex>
              <Box w="18px" cursor="pointer" h="18px">
                <Image
                  src={Right}
                  alt="Vercel Logo"
                  width={17}
                  height={17}
                  priority
                />
              </Box>
            </Flex>
            <Flex flexWrap="wrap" justify="center" gap="10px">
              <Card
                w="189px"
                h="73px"
                border="1pxx solid #E4E4E4"
                borderRadius="12px"
                p="10px"
              >
                <CardHeader p="0">
                  <Heading
                    className="main-font"
                    fontSize="20px"
                    fontWeight="600"
                    color="#4545FE"
                    mb="7px"
                  >
                    &#8358; 0.00
                  </Heading>
                </CardHeader>
                <CardBody p="0">
                  <Flex gap="5px" align="center">
                    <Text
                      className="main-font"
                      fontSize="10px"
                      fontWeight="500"
                      color="#3D3D3D"
                    >
                      Balance
                    </Text>
                    <Image
                      src={CardIconOne}
                      alt="Vercel Logo"
                      width={14}
                      height={14}
                      priority
                    />
                    <Text
                      className="main-font"
                      fontSize="10px"
                      fontWeight="500"
                      color="#12D8A0"
                    >
                      0%
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
              <Card
                w="189px"
                h="73px"
                border="1pxx solid #E4E4E4"
                borderRadius="12px"
                p="10px"
              >
                <CardHeader p="0">
                  <Heading
                    className="main-font"
                    fontSize="20px"
                    fontWeight="600"
                    color="#4545FE"
                    mb="7px"
                  >
                    &#8358; 0.00
                  </Heading>
                </CardHeader>

                <CardBody p="0">
                  <Flex gap="5px" align="center">
                    <Text
                      className="main-font"
                      fontSize="10px"
                      fontWeight="500"
                      color="#3D3D3D"
                    >
                      Deposit
                    </Text>
                    <Image
                      src={CardIconOne}
                      alt="Vercel Logo"
                      width={14}
                      height={14}
                      priority
                    />
                    <Text
                      className="main-font"
                      fontSize="10px"
                      fontWeight="500"
                      color="#12D8A0"
                    >
                      0%
                    </Text>
                  </Flex>
                </CardBody>
              </Card>{" "}
              <Card
                w="189px"
                h="73px"
                border="1pxx solid #E4E4E4"
                borderRadius="12px"
                p="10px"
              >
                <CardHeader p="0">
                  <Heading
                    className="main-font"
                    fontSize="20px"
                    fontWeight="600"
                    color="#191919"
                    mb="7px"
                  >
                    &#8358; 0.00
                  </Heading>
                </CardHeader>

                <CardBody p="0">
                  <Flex gap="5px" align="center">
                    <Text
                      className="main-font"
                      fontSize="10px"
                      fontWeight="500"
                      color="#3D3D3D"
                    >
                      Purchase
                    </Text>
                    <Image
                      src={CardIconOne}
                      alt="Vercel Logo"
                      width={14}
                      height={14}
                      priority
                    />
                    <Text
                      className="main-font"
                      fontSize="10px"
                      fontWeight="500"
                      color="#12D8A0"
                    >
                      0%
                    </Text>
                  </Flex>
                </CardBody>
              </Card>{" "}
              <Card
                w="189px"
                h="73px"
                border="1pxx solid #E4E4E4"
                borderRadius="12px"
                p="10px"
              >
                <CardHeader p="0">
                  <Heading
                    className="main-font"
                    fontSize="20px"
                    fontWeight="600"
                    color="#FF6A6A"
                    mb="7px"
                  >
                    &#8358; 0.00
                  </Heading>
                </CardHeader>

                <CardBody p="0">
                  <Flex gap="5px" align="center">
                    <Text
                      className="main-font"
                      fontSize="10px"
                      fontWeight="500"
                      color="#3D3D3D"
                    >
                      Withdrawal
                    </Text>
                    <Image
                      src={CardIconTwo}
                      alt="Vercel Logo"
                      width={14}
                      height={14}
                      priority
                    />
                    <Text
                      className="main-font"
                      fontSize="10px"
                      fontWeight="500"
                      color="#FF6A6A"
                    >
                      0%
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box>
        <Flex
          direction="column"
          w="100%"
          h="157px"
          borderRadius="16px"
          bg="#ffffff"
          p="15px"
          boxShadow=" 0 5px 4px #00000005"
        >
          <Flex justify="space-between" pb="15px">
            <Flex justify="center" align="center">
              <Image
                src={Property}
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
              <Heading
                className="main-font"
                fontSize="14px"
                fontWeight="500"
                color="#3D3D3D"
                ml="10px"
              >
                Property Overview
              </Heading>
            </Flex>

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
          <Flex flexWrap="wrap" gap="10px">
            <Card
              display="flex"
              direction="column"
              justify="center"
              align="center"
              w="110px"
              h="79px"
              pt="10px"
              border="1px solid #F5F5F5"
            >
              <CardHeader p="0">
                <Heading
                  className="main-font"
                  fontSize="24"
                  fontFamily="600"
                  color="#191919"
                  mb="10px"
                >
                  0
                </Heading>
              </CardHeader>
              <CardBody p="0">
                <Text
                  className="main-font"
                  fontSize="14"
                  fontFamily="400"
                  color="#606060"
                >
                  Total
                </Text>
              </CardBody>
            </Card>
            <Card
              display="flex"
              direction="column"
              justify="center"
              align="center"
              w="110px"
              h="79px"
              pt="10px"
              border="1px solid #F5F5F5"
            >
              <CardHeader p="0">
                <Heading
                  className="main-font"
                  fontSize="24"
                  fontFamily="600"
                  color="#191919"
                  mb="10px"
                >
                  0
                </Heading>
              </CardHeader>
              <CardBody p="0">
                <Text
                  className="main-font"
                  fontSize="14"
                  fontFamily="400"
                  color="#606060"
                >
                  Available
                </Text>
              </CardBody>
            </Card>
            <Card
              display="flex"
              direction="column"
              justify="center"
              align="center"
              w="110px"
              h="79px"
              pt="10px"
              border="1px solid #F5F5F5"
            >
              <CardHeader p="0">
                <Heading
                  className="main-font"
                  fontSize="24"
                  fontFamily="600"
                  color="#191919"
                  mb="10px"
                >
                  0
                </Heading>
              </CardHeader>
              <CardBody p="0">
                <Text
                  className="main-font"
                  fontSize="14"
                  fontFamily="400"
                  color="#606060"
                >
                  Sold Out
                </Text>
              </CardBody>
            </Card>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          w="100%"
          h="157px"
          borderRadius="16px"
          bg="#ffffff"
          p="15px"
          mt="15px"
          boxShadow=" 0 5px 2px #00000005; "
        >
          <Flex justify="space-between" pb="15px">
            <Flex justify="center" align="center">
              <Image
                src={Customer}
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
              <Heading
                className="main-font"
                fontSize="14px"
                fontWeight="500"
                color="#3D3D3D"
                ml="10px"
              >
                Customer Overview
              </Heading>
            </Flex>
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
          <Flex flexWrap="wrap" gap="10px">
            <Card
              display="flex"
              direction="column"
              justify="center"
              align="center"
              w="80px"
              h="79px"
              pt="10px"
              border="1px solid #F5F5F5"
            >
              <CardHeader p="0">
                <Heading
                  className="main-font"
                  fontSize="24"
                  fontFamily="600"
                  color="#191919"
                  mb="10px"
                >
                  0
                </Heading>
              </CardHeader>
              <CardBody p="0">
                <Text
                  className="main-font"
                  fontSize="14"
                  fontFamily="400"
                  color="#606060"
                >
                  {" "}
                  Total
                </Text>
              </CardBody>
            </Card>
            <Card
              display="flex"
              direction="column"
              justify="center"
              align="center"
              w="80px"
              h="79px"
              pt="10px"
              border="1px solid #F5F5F5"
            >
              <CardHeader p="0">
                <Heading
                  className="main-font"
                  fontSize="24"
                  fontFamily="600"
                  color="#191919"
                  mb="10px"
                >
                  0
                </Heading>
              </CardHeader>
              <CardBody p="0">
                <Text
                  className="main-font"
                  fontSize="14"
                  fontFamily="400"
                  color="#606060"
                >
                  New
                </Text>
              </CardBody>
            </Card>
            <Card
              display="flex"
              direction="column"
              justify="center"
              align="center"
              w="80px"
              h="79px"
              pt="10px"
              border="1px solid #F5F5F5"
            >
              <CardHeader p="0">
                <Heading
                  className="main-font"
                  fontSize="24"
                  fontFamily="600"
                  color="#191919"
                  mb="10px"
                >
                  0
                </Heading>
              </CardHeader>
              <CardBody p="0">
                <Text
                  className="main-font"
                  fontSize="14"
                  fontFamily="400"
                  color="#606060"
                >
                  Active
                </Text>
              </CardBody>
            </Card>
            <Card
              display="flex"
              direction="column"
              justify="center"
              align="center"
              w="80px"
              h="79px"
              pt="10px"
              border="1px solid #F5F5F5"
            >
              <CardHeader p="0">
                <Heading
                  className="main-font"
                  fontSize="24"
                  fontFamily="600"
                  color="#191919"
                  mb="10px"
                >
                  0
                </Heading>
              </CardHeader>
              <CardBody p="0">
                <Text
                  className="main-font"
                  fontSize="14"
                  fontFamily="400"
                  color="#606060"
                >
                  Inactive
                </Text>
              </CardBody>
            </Card>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SalesOverview;
