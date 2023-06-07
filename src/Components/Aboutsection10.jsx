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
import Img1 from "../assets/1549.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutsection10 = () => {
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
              <Heading size="lg">Training</Heading>
              <Text py="2">
                In view of our commitment to providing excellent shipping
                services in the country, we have endeavored to maintain our
                obligation in the training of our human resources on board as
                well as the shore based staff. Over the years, the company has
                arranged various courses to update the skills, capabilities and
                technical knowledge of our local maritime industry. Some of
                these training are organized in-house through our resource
                personnel from abroad where these courses are not available in
                the country. We have trained our staff to comply with STCW '95
                mandatory courses, ISM code, ISO 9002, tanker safety
                courses-ISPS code to comply with International Maritime
                Organisation (IMO) regulations. Also, we have organized training
                berth for over 500 Nigerian seafarers and practical training for
                NIMASA surveyors-in-training. Sometime in 2015, we provided
                maritime training (Marine Trainees) for 30 Niger Delta Youths
                for the Ministry of Niger Delta Affairs under the Federal
                Government Amnesty Programme. Also, just recently we sponsored a
                training programme for Nigerian National Petroleum Corporation
                (NNPC/Marine Logistics) staff to acquaint them with basic
                maritime knowledge.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default Aboutsection10;
