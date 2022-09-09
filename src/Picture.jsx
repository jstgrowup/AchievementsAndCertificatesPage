import React from 'react';
import {
    Box,

    Link,
    Image,
    Center,

} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';


function Picture({ src }) {
    return (
        <Box  >
            <Center>

                <Image
                    borderRadius="lg"
                    // border={"2px"}
                    minW={["250px", "500px", "670px", "520px"]}
                    minH={["200px", "250px", "301px"]}
                    src={src}
                    alt="some good alt text"
                    // objectFit="contain"
                    transition="0.3s ease-in-out"
                    _hover={{
                        transform: 'scale(1.05)',
                    }}
                />
             </Center>
         </Box>
    )
}

export default Picture