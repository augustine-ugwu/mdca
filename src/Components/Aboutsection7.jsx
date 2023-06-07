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

const Aboutsection7 = () => {
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
              <Heading size="lg">Facilities</Heading>
              <Text py="2">
                <ul style={{ paddingBottom: "1em" }}>
                  <li>
                    We have and operate fully equipped offices in Lagos, Warri
                    and Portharcourt respectively.
                  </li>
                  <li>
                    We have modern radio communication equipment to facilitate
                    operations from each of the operational offices in locations
                    stated above.
                  </li>
                  <li>
                    We have highly experienced and knowledgeable Nigerians and
                    few foreign nationals in our organization who are skilled
                    and dedicated in the discharge of their functional
                    responsibilities.
                  </li>
                  <li>
                    We maintain a very efficient and effective operational
                    relationship with our foreign shipping and brokerage
                    partners.
                  </li>
                  <li>
                    We have and operate a working policy of continuous manpower
                    development of both our local and foreign staff by exposing
                    them to training in Nigeria and overseas.
                  </li>
                </ul>
                We are pleased to say that our performance in the provision and
                chartering of vessels and tugboats as well as in the bunkering
                operations during the period have been operationally and
                financially rewarding to our clients and as well as ourselves.
                We have gained tremendous experience and demonstrated
                quantifiable expertise in the chartering and management of
                vessels and tugboats and offshore operations over the past
                years. To this end, we can confidently but modestly state that
                our acquired knowledge, skill experience can be clearly seen in
                our proven achievements such that we can be considered a major
                player in the country's coastal shipping sale of bunkers fuels
                by the Oil Marketing Companies and the Pipelines & Products
                Marketing Company Limited. It is our mission to continue to
                improve our performance in order to maintain the leadership
                position hitherto achieved through dedication and efficient
                services at all times.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default Aboutsection7;
