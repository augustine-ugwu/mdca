import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  chakra,
  Stack,
  Flex,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Container py={2}>
      <Stack>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"gray.100"}
          mb={1}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text>{text}</Text>
      </Stack>
    </Container>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      p={{ base: 4, md: 10, lg: 24 }}
    >
      <Box
        width={{ base: "full", sm: "lg", lg: "xl" }}
        fontSize={{ base: "3xl", sm: "4xl", lg: "4xl" }}
        margin={"auto"}
        pb={2}
      >
        <chakra.h3
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={24}
          textTransform={"uppercase"}
          color={useColorModeValue("gray.700", "gray.50")}
          textAlign="center"
          pb={10}
        >
          People love us
        </chakra.h3>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Lifetime Support"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Unlimited Donations"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Instant Delivery"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
