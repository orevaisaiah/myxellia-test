"use client";
import React, { useState } from "react";
import "./style.css";
import Calendar from "react-calendar";
import { Heading, Flex, Button, Box } from "@chakra-ui/react";
import Img from "../../../public/images/cross.svg";
import Image from "next/image";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Box>
      <Flex
        direction="row"
        color="white"
        justify="space-between"
        align="center"
        px="20px"
      >
        <Heading textAlign="center" fontSize="16px" w="400px" bg="#171717">
          Calender
        </Heading>
        <Button bg="none">
          <Image src={Img} alt="Vercel Logo" width={24} height={24} priority />
        </Button>
      </Flex>
      <Box className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </Box>
    </Box>
  );
};

export default Calender;
