import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <>
      <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <Text fontWeight={700} fontSize={30}>
          404 - Page Not Found
        </Text>
      </Flex>
    </>
  );
};

export default NotFound;
