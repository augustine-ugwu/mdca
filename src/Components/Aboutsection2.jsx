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
import Img1 from "../assets/1544.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutsection2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        p={{ base: 1, md: 10, lg: 16 }}
      >
        <Card
          data-aos="fade-up"
          data-aos-duration="2000"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          border={"none"}
        >
          <Stack>
            <CardBody p={{ base: 2, md: 10 }}>
              <Text>
                In the early years of the company's operations, it was actively
                involved in the supply of bunker fuels to vessels calling
                Nigerian ports both in Lagos, Portharcourt, Warri and Calabar.
                Later, because of the existing need in the shipping industry for
                the sourcing and chartering of vessels for coastal trade, the
                company divested into vessels acquisition, management and
                chartering of vessels ranging from 5,000 to 45,000 Deadweight.
                Initially, the company's vessels were chartered to the then
                major oil marketing companies like- Unipetrol, National Oil &
                Chemical Marketing Company and African Petroleum Plc for supply
                of bunkers to vessels calling Nigerian ports and the West
                African sub-region. Ship & Shore Services Limited has been very
                active and a major player in the Nigerian Shipping/Oil & Gas
                industry. Following the need for transportation of petroleum
                products by the Nigerian National Petroleum Corporation (NNPC)
                in the early 1990, the company was one of the pioneer that
                supplied the NNPC coastal vessel on charter for the
                transportation of refined petroleum products - AGO, LPFO and PMS
                from the refineries at Portharcourt and Warri and also
                lightering import vessels through Ship to Ship (STS) transfer
                and discharge at storage facilities in the Lagos area. Over the
                years- 35 years, the company has had the privilege of providing
                vessels and tugboats to the Nigerian National Petroleum
                Corporation (NNPC). Ship & Shore Services Limited based on her
                pedigree, technical and professional experience in bunkering and
                vessel chartering/operations has been privileged to charter
                vessels as well as the only company awarded a bunkering contract
                of supplying NNPC vessels consistently for over 20 years. In
                2020, the Company in her quest to diversify into the Upstream
                sector of the Petroleum industry, entered into a Joint Venture
                with Redstar Oil & Gas Company Ltd and secured a contract with
                Energy Links Infrastructure (ELI) for the loading/barging and
                transportation of Crude Oil and discharge into Floating
                Production Storage and Offloading (FPSO) vessels. Ship & Shore
                Services Limited has a wide experience in the Technical and
                Commercial management of vessels of various Deadweights
                including FPSO vessels. The Company in conjunction with her JV
                Partner - Redstar Oil & Gas Company Ltd recently entered into a
                Bunkering Agreement with NIDAS Marine Ltd a subsidiary of the
                Nigerian National Petroleum Corporation (NNPC) for supply of
                bunker fuels to NIDAS/NNPC vessel fleet. In other to harness a
                synergistic advantage and as part of our long terms strategic
                plan, the Company is to diversify her operations into the
                provision of inland logistics ie transportation of dry cargo,
                marine fuels, etc across the country with the deployment of
                heavy duty trucks from our sister company-National Trucks
                Manufacturers Ltd, Kano.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default Aboutsection2;
