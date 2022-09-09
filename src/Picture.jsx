import React from 'react';
import {
    Box,
  
    Link,
    Image,
 
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';


function Picture({ src }) {
    return (
        <Box  >
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }} >
                <Image
                    borderRadius="lg"
                    // border={"2px"}
                    minW={["250px", "300px", "640px", "520px"]}
                    minH={["290px", "301px"]}
                    src={src}
                    alt="some good alt text"
                    // objectFit="contain"
                    transition="0.3s ease-in-out"
                    _hover={{
                        transform: 'scale(1.05)',
                    }}
                />

            </Link>
        </Box>
    )
}

export default Picture