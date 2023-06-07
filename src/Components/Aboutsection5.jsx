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
import Img1 from "../assets/1550.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutsection5 = () => {
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
              <Heading size="lg">Crewing / Crew Management Services</Heading>
              <Text py="2">
                Presently, we provide crew management services for over 150 crew
                covering areas like - crew recruitment, training, wage review
                through collective bargaining in line with International
                standards, promotions, liaising with NIMASA for CDC endorsements
                and crew welfare. We have managed a fleet comprising of Tankers
                ranging from 5,000 to 40,000 Deadweight. The company's fleet of
                vessels are all ISM & ISPS certified. Presently, we have in our
                fleet one (1) coastal tanker and one (1) tugboats on charter to
                the Nigerian National Petroleum Corporation (NNPC). Over the
                years, we have proven to be an important link in the petroleum
                product distribution chain across the country and in particular
                Lagos area, Portharcourt, Warri and Calabar.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default Aboutsection5;
