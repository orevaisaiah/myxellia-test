"use client";
import React from "react";
import Logo from "../logo/Logo";
import {
  Box,
  Flex,
  Text,
  Link,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

import Plus from "../../../public/images/plus.svg";
import Profile from "../../../public/images/profile.svg";
import Calender from "../../../public/images/calender.svg";
import Notif from "../../../public/images/notification.svg";
import Arrow from "../../../public/images/arrow.svg";
import Dashboard from "../../../public/images/dashboard.svg";
import Listings from "../../../public/images/listing.svg";
import Users from "../../../public/images/user.svg";
import Account from "../../../public/images/account.svg";
import Request from "../../../public/images/request.svg";
import Settings from "../../../public/images/settings.svg";
import Search from "../../../public/images/search.svg";
import Support from "../suppport";
import Calendar from "../calendar";

import Image from "next/image";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex direction="column" pos="relative">
      <Flex
        px="78px"
        h="82px"
        justify="space-between"
        align="center"
        bg="#191919"
      >
        <Box>
          <Logo />
        </Box>
        <Flex>
          <Flex w="144px" justify="space-evenly" align="center" mr="45px">
            <Image
              src={Plus}
              alt="Vercel Logo"
              width={32}
              height={32}
              priority
            />
            <>
              <Image
                style={{ cursor: "pointer" }}
                src={Calender}
                alt="Vercel Logo"
                width={32}
                height={32}
                priority
                onClick={onOpen}
              />
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerContent>
                  <Calendar />
                </DrawerContent>
              </Drawer>
            </>
            <Image
              src={Notif}
              alt="Vercel Logo"
              width={32}
              height={32}
              priority
            />
          </Flex>
          <Flex justify="space-evenly" align="center" w="178px">
            <Image
              src={Profile}
              alt="Vercel Logo"
              width={48}
              height={48}
              priority
            />
            <Text className="nav-name" fontSize="md" color="#FFFFFF">
              Ahmed Ali
            </Text>
            <Image
              src={Arrow}
              alt="Vercel Logo"
              width={24}
              height={24}
              priority
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        px="78px"
        h="67px"
        justify="space-between"
        align="center"
        bg="ffffff"
      >
        <Flex justify="space-between" align="center" w="938px">
          <Link
            display="flex"
            alignItems="center"
            justifyContent="center"
            href="/"
            w="140px"
            h="35px"
            _hover={{ textDecoration: "none", border: "1.5px solid purple" }}
          >
            <Flex justify="center" align="center">
              <Image
                src={Dashboard}
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
              <Text
                className="nav-name"
                fontSize="14px"
                color="#3D3D3D"
                pl="10px"
              >
                Dashboard
              </Text>
            </Flex>
          </Link>
          <Link
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="140px"
            h="35px"
            _hover={{ textDecoration: "none", border: "1.5px solid purple" }}
            href="/listings"
          >
            <Flex justify="center" align="center">
              <Image
                src={Listings}
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
              <Text
                className="nav-name"
                fontSize="14px"
                color="#3D3D3D
"
                pl="10px"
              >
                Listings
              </Text>
            </Flex>
          </Link>{" "}
          <Link
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="140px"
            h="35px"
            _hover={{ textDecoration: "none", border: "1.5px solid purple" }}
            href="/users"
          >
            <Flex justify="center" align="center">
              <Image
                src={Users}
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
              <Text
                className="nav-name"
                fontSize="14px"
                color="#3D3D3D
"
                pl="10px"
              >
                Users
              </Text>
            </Flex>
          </Link>{" "}
          <Link
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="140px"
            h="35px"
            _hover={{ textDecoration: "none", border: "1.5px solid purple" }}
            href="/account"
          >
            <Flex justify="center" align="center">
              <Image
                src={Account}
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
              <Text
                className="nav-name"
                fontSize="14px"
                color="#3D3D3D
"
                pl="10px"
              >
                Account
              </Text>
            </Flex>
          </Link>{" "}
          <Link
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="140px"
            h="35px"
            _hover={{ textDecoration: "none", border: "1.5px solid purple" }}
            href="/request"
          >
            <Flex justify="center" align="center">
              <Image
                src={Request}
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
              <Text
                className="nav-name"
                fontSize="14px"
                color="#3D3D3D
"
                pl="10px"
              >
                Request
              </Text>
            </Flex>
          </Link>{" "}
          <Link
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="140px"
            h="35px"
            _hover={{ textDecoration: "none", border: "1.5px solid purple" }}
            href="/settings"
          >
            <Flex justify="center" align="center">
              <Image
                src={Settings}
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
              <Text
                className="nav-name"
                fontSize="14px"
                color="#3D3D3D
"
                pl="10px"
              >
                Settings
              </Text>
            </Flex>
          </Link>
        </Flex>
        <Box>
          <InputGroup w="290px" bg="#F5F5F5">
            <Input
              placeholder="Search... properties, customers here"
              fontSize="12px"
              color="#919191"
            />
            <InputRightElement>
              <Image
                src={Search}
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>
      <Support pos="sticky" />
    </Flex>
  );
};

export default NavBar;
