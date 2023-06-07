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
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Img1 from "../assets/1544.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutsection4 = () => {
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
              <Heading size="lg">Shipping Services</Heading>
              <Text py="2">
                In the past 25 years, we have been involved in the management
                and chartering of : <Spacer />
                <ul>
                  <li>
                    Coastal vessels to the Nigerian National Petroleum
                    Corporation (NNPC) for the movement of refined petroleum
                    products from the refineries to designated ports in Lagos,
                    Warri, Portharcourt and Calabar. Currently, the company own
                    and operate two (2) tanker vessels of 10,000 to 35,000
                    Deadweight and six (6) tugboats.
                  </li>
                  <li>
                    Spot charter of vessels to other organizations in the
                    movement of refined petroleum products across the country
                    and to some designated West African countries.
                  </li>
                  <li>
                    We successfully operated a joint venture bunkering agreement
                    with the Pipelines & Products Marketing Company (PPMC) a
                    subsidiary of the Nigerian National Petroleum Corporation
                    (NNPC).
                  </li>
                  <li>
                    Chartering of vessels for domestic bunkering operations
                    (sale Dof bunker fuels) and exports in the West African
                    sub-region to both Oando Plc, Forte Oil (formerly African
                    Petroleum Plc and Conoil Plc).
                  </li>
                  <li>
                    Chartering of vessels on spot charter basis to companies in
                    the Oil/Gas industry like NIPCO, Wabeco, Transcon etc for
                    the transportation of refined petroleum products to
                    designated ports and discharge facilities within the
                    country.
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

export default Aboutsection4;
