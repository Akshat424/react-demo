import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Header from "../components/header";
import Card from "../components/Card";

const SelectProduct = () => {
  const handleContinueClick = () => {
    alert("Continue clicked");
  };

  return (
    <>
      <Header />
      <Box pt="40px" mx="auto" maxW="50%">
        <Text fontWeight="600" fontSize="24px" mb="25px">
          Select a product
        </Text>
        <Flex gap="15px" flexDir="column">
          <Card
            title="Setup Apollo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ></Card>
          <Card
            title="Setup Rubix"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ></Card>
          <Card
            title="Setup Janus"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ></Card>
        </Flex>

        <Box pt="60px" textAlign="right">
          <Button color="#ffff" onClick={handleContinueClick}>
            Continue
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SelectProduct;
