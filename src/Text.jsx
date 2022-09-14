import React from 'react';
import {
  Box,
  Center,
  Heading,
  Link,

  Text,

} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';



function TextCompo({ heading, text, link }) {
  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
      justifyContent="center"
      fontFamily={"sans-serif"}
      data-aos="fade-up" data-aos-duration="2000"

    >
      <Center>
        <Heading marginTop="1" fontSize={"33px"}>

          {heading}

        </Heading>
      </Center>

      <hr style={{ height: "1px", backgroundColor: "white" }} />
      <Text

        align={"center"}
        fontSize="lg">
        {text}
      </Text>
      <Center>
        <Heading fontSize={"24px"}>
          <Link href={link} target={"_blank"}>Certificate <ExternalLinkIcon /> </Link>
        </Heading>
      </Center>

    </Box>
  )
}

export default TextCompo