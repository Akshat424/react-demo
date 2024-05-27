import { Flex, Image } from "@chakra-ui/react";
import cashfloLogo from "../assets/logos/cf_logo.png";

const Header = () => {
  return (
    <Flex as="header" height="80px" padding="40px 80px 24px 80px" width="100%">
         <Image src={cashfloLogo} alt="cashflo_logo" />
    </Flex>
  );
};

export default Header;
