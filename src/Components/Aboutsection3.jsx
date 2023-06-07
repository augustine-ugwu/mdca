import {
  Box,
  Image,
  Stack,
  Card,
  CardBody,
  Text,
  CardFooter,
  Heading,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Img1 from "../assets/1542.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutsection3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        m={{ base: 1, md: 10, lg: 16 }}
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
            maxW={{ base: "100%", sm: "20em", md: "30em" }}
            src={Img1}
            alt="Shipping Vessel"
          />

          <Stack>
            <CardBody p={{ base: 2, md: 10 }}>
              <Heading size="lg">Our Mission Statement</Heading>
              <Text py="2">
                To be an indigenous ship chartering and management company of
                primary reference in Nigeria offering services that exceed the
                needs of vessel owners, charterers and all its stakeholders. The
                Company's core values are -
                <ul>
                  <li>Excellence in service delivery</li>
                  <li>Professionalism</li>
                  <li>Dedication and team spirit</li>
                  <li>Value added for clients' satisfaction</li>
                  <li>
                    Quick and timely response to operational issues and
                    challenges
                  </li>
                </ul>
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default Aboutsection3;
