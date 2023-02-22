import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Button,
  Avatar,
  VStack,
  Text,
  MenuDivider,
  Box,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../Assets/112.svg";

// All the routes excluded
const withouSidebarRoutes = ["/signup", "/login"];

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { pathname } = useLocation();

  // Validates if the current pathname includes one the routes you want to hide the sidebar is present on the current url
  // If that's true render null instead of the sidebar

  if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;

  return (
    <div>
      <Flex
        px={{ base: 4 }}
        height="16"
        alignItems="center"
        justifyContent={{ base: "flex-end" }}
      >
        <Box mr={"auto"} ml={{ base: 2, md: "4em" }}>
          <Link to="/">
            <Flex verticalAlign={"baseLine"}>
              <img src={Logo} width="40em" alt="" />

              <Box mt={"auto"} ml={2}>
                <Text
                  lineHeight={0.8}
                  letterSpacing={-1}
                  fontFamily={"roboto"}
                  fontSize={24}
                  fontWeight={900}
                >
                  MERCADO
                </Text>
                <Text
                  lineHeight={0.8}
                  fontFamily={"roboto"}
                  fontSize={10}
                  fontWeight={700}
                >
                  Digital Creative Agency
                </Text>
              </Box>
            </Flex>
          </Link>
        </Box>
        <HStack spacing={{ base: "4", md: "6" }}>
          <Button variant={"unstyled"} onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar size={"sm"} />
                  <VStack
                    display={{ base: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">User</Text>
                    <Text fontSize="xs">Welcome</Text>
                  </VStack>
                  <Box display={{ base: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/profile">Profile</Link>
                </MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem fontWeight={600}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </div>
  );
};

export default Navbar;
