import React from "react";
import Image from "next/image";
import LogoUp from "../../../public/images/logo-up.svg";
import LogoDown from "../../../public/images/logo-down.svg";
import { Flex, Link } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Link href="/" _hover={{ textDecoration: "none" }}>
      <Flex direction="column">
        <Image
          src={LogoUp}
          alt="company Logo"
          width={119}
          height={35}
          priority
        />
        <Image
          src={LogoDown}
          alt="company Logo"
          width={88}
          height={11}
          priority
        />
      </Flex>
    </Link>
  );
};

export default Logo;
