import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";

const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <Box minH="92vh" bg={useColorModeValue("gray.100", "gray.900")} p={2}>
        <Outlet />
      </Box>
    </div>
  );
};

export default DefaultLayout;
