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
import Img1 from "../assets/1548.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutsection9 = () => {
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
              <Heading size="lg">Staff</Heading>
              <Text py="2">
                We employ in our company over 150 staff, both onshore and
                offshore. These are composed of mostly Nigerians and few foreign
                nationals and are of various levels in the company's
                organizational hierarchy. As stated earlier, we have a working
                policy of training and manpower development, which provides
                opportunity for selected members of staff to be exposed to
                nominated training courses such as STWC 96, ISM code,
                ISO-9001:2000, Tanker Safety courses and ISPS code for improved
                knowledge and skill in compliance with current International
                Maritime Organisation (IMO) regulations. In our several years of
                operations, we have succeeded in developing and acquiring highly
                skilled and dedicated local and foreign personnel who form part
                of our strength for future growth. Our foreign technical staff
                handle the day to day repairs and maintenance of our vessels.
                They also ensure that the vessels meet their class requirement
                and are insured with reputable clubs/underwriters locally and
                overseas.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default Aboutsection9;
