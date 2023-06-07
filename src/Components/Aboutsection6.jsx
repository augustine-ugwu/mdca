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
import Img1 from "../assets/1546.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutsection6 = () => {
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
              <Heading size="lg">Agency Services</Heading>
              <Text py="2">
                Over the years, we have been actively involved in the provision
                of agency services for vessels of Owners both locally and
                internationally calling at Nigerian port. We provide crew
                manning and management services to shipping companies and also
                for our vessels and tugboats on charter to the Pipelines &
                Products Marketing Company Limited (PPMC). We are fully licenced
                by the Nigerian Maritime Administration and Safety Agency
                (NIMASA/JOMALIC) to provide crewing/manning services within the
                maritime industry. In rendering agency services, we liaise with
                relevant government agencies like the Nigerian Ports Authority
                (NPA), Nigerian Maritime Administration and Safety Agency
                (NIMASA) and ensure that vessel operations comply with the
                country's laws and regulations. We have been privileged and have
                the honour of been nominated to the Federal Government Committee
                at the instance of the Manning Agents Association charged with
                the responsibility of reviewing and making recommendations on
                Seafarer employment contract and welfare package. We presently
                manage a crew pool of about 150 in coastal tankers and tugboats.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default Aboutsection6;
