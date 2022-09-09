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
                    boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
                    borderRadius="lg"
                   
                    minW={["250px", "500px", "670px", "560px"]}
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