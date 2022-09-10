import React from 'react';
import {
  Box,
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

    >

      <Heading marginTop="1" fontSize={"33px"}>

        {heading}

      </Heading>
      <hr style={{ height: "1px", backgroundColor: "white" }} />
      <Text


        fontSize="lg">
        {text}
      </Text>
      <Heading fontSize={"24px"}>
        <Link href={link} target={"_blank"}>Certificate <ExternalLinkIcon /> </Link>
      </Heading>
    </Box>
  )
}

export default TextCompo