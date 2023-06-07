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
import Img1 from "../assets/1551.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutsection8 = () => {
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
              <Heading size="lg">Local International Certification</Heading>
              <Text py="2">
                We are proud of our international rating and are happy to say
                that our company is the first indigenous and perhaps the only
                company in West Africa to meet the International Safety
                Management (ISM) standard. It is pertinent to state that, to
                this end, all our vessels are duly certified by the ISM code.
                Our company has also fully complied with the ISPS code and
                possess ISO-9002 certification for quality management. We are a
                member of the Indigenous Shipowners' Association of Nigeria
                (ISAN). We are duly registered with the Nigerian Ports Authority
                (NPA) as a shipping company and the Nigerian Maritime
                Administration and Safety Agency (NIMASA).
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default Aboutsection8;
