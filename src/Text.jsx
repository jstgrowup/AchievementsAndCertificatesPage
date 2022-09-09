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

    >

      <Heading marginTop="1" fontSize={"30px"}>

        {heading}

      </Heading>
      <hr style={{ height: "1px", backgroundColor: "white" }} />
      <Text


        size="md">
        {text}
      </Text>
      <Heading size={"sm"}>
        <Link href={link} target={"_blank"}>Certificate <ExternalLinkIcon /> </Link>
      </Heading>
    </Box>
  )
}

export default TextCompo