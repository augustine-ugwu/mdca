import {
  Box,
  Container,
  Flex,
  Image,
  Img,
  Stack,
  Card,
  CardBody,
  Text,
  CardFooter,
  Heading,
  Button,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Slideshow from "./Slideshow";
import Img1 from "../assets/1542.jpg";
import styles from "./index.module.css";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Aboutsection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        m={{ base: "1em", md: 10, lg: 16 }}
      >
        <Card
          data-aos="fade-up"
          data-aos-duration="2000"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          border={"none"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "20em", md: "50em" }}
            src={Img1}
            alt="Shipping Vessel"
          />

          <Stack>
            <CardBody p={{ base: 1, md: 10 }}>
              <Heading size="lg">Brief About Us</Heading>
              <Text py="2">
                Ship & Shore Services Limited has been very active and a major
                player in the Nigerian Shipping/Oil & Gas industry. Following
                the need for transportation of petroleum products by the
                Nigerian National Petroleum Corporation (NNPC) in the early
                1990, the company was one of the pioneer that supplied the NNPC
                coastal vessel on charter for the transportation of refined
                petroleum products AGO, LPFO and PMS from the refineries at
                Portharcourt and Warri and also lightering import vessels
                through Ship to Ship (STS) transfer and discharge at storage
                facilities in the Lagos area. Over the years- 35 years, the
                company has had the privilege of providing vessels and tugboats
                to the Nigerian National Petroleum Corporation (NNPC). Ship &
                Shore Services Limited based on her pedigree, technical and
                professional experience in bunkering and vessel
                chartering/operations has been privileged to charter vessels as
                well as the only company awarded a bunkering contract of
                supplying NNPC vessels consistently for over 20 years.
              </Text>
            </CardBody>

            <CardFooter p={{ base: 1, md: 10 }}>
              <Link to="/about">
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="teal"
                  variant="solid"
                >
                  Read More About Us
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default Aboutsection;
