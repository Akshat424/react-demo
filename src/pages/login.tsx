import { Box, Button, Flex, Image, Input, Link, Text } from "@chakra-ui/react";

import gradientSrc from "../assets/logos/gradient_cf.png";
import cashfloLogo from "../assets/logos/cf_logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useNavigate();

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
    router("/select-product");
  };

  return (
    <Flex height="100vh" width="100%">
      <Box
        width="50%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box display="flex" justifyContent="center" pb="30px">
          <Image src={cashfloLogo} />
        </Box>
        <Box width="70%" maxWidth="510px">
          <Box border="1px solid #E0E0E0" borderRadius="24px">
            <Box borderBottom="1px solid #E0E0E0">
              <Text p="24px" fontWeight="600">
                Log in into your account
              </Text>
            </Box>
            <Flex p="24px" flexDirection="column" gap="40px">
              <Box>
                <Text fontSize="16px" fontWeight="600" pb="2px">
                  Email
                </Text>
                <Input
                  type="email"
                  value={email}
                  onChange={handleEmailInputChange}
                />
              </Box>
              <Box>
                <Text fontSize="16px" fontWeight="600" pb="2px">
                  Password
                </Text>
                <Input
                  type="password"
                  value={password}
                  onChange={handlePasswordInputChange}
                />
                <Box textAlign="right">
                  <Link
                    color="blue.500"
                    fontSize="14px"
                    textColor="#000000"
                    textDecoration="underline"
                  >
                    Forgot Password?
                  </Link>
                </Box>
              </Box>
              <Box>
                <Button
                  onClick={handleLoginClick}
                  colorScheme="blue"
                  width="100%"
                >
                  Login
                </Button>
              </Box>
            </Flex>
          </Box>
          <Box mt="10px" fontSize="16px" textAlign="center">
            <Text as="span">
              New to Cashflo?{" "}
              <Link as="span" fontWeight={600} textDecoration="underline">
                Contact Sales
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
      <Box width="50%">
        <Image src={gradientSrc} width="100%" height="100%" />
      </Box>
    </Flex>
  );
}
