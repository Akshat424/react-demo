import { Flex, Card as ChakraCard, Box, Heading, Text } from "@chakra-ui/react";

interface ICardProps {
  title: string;
  description: string;
}
const Card = ({ title, description }: ICardProps) => {
  return (
    <ChakraCard p="24px" minW="550px" cursor="pointer">
      <Flex gap="15px">
        <Box
          width="65px"
          height="55px"
          backgroundColor="#D9D9D9"
          borderRadius="10px"
        ></Box>
        <Box>
          <Heading fontSize="14px" fontWeight="600">
            {title}
          </Heading>
          <Text fontSize="10px" color="#828282">
            {description}
          </Text>
        </Box>
      </Flex>
    </ChakraCard>
  );
};

export default Card;
