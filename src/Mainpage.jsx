import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,


    Wrap,
    WrapItem,

    useColorModeValue,
    Container,
    VStack,
    Center,
    SimpleGrid,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';



const Mainpage = () => {
    return (
        <>
            <Box bgColor={"#2563EB"} color={"white"} p={"12"}>
                <Center >

                    <Heading size={"2xl"}>Certificates and Achievements</Heading>
                </Center>
                <SimpleGrid columns={[1, 1, 1, 2]} gap={"27"} mt={"39"}>
                    <Box
                        display="flex"
                        flex="1"
                        position="relative"
                        alignItems="center">
                        <Box
                            width={{ base: '100%', sm: '85%' }}
                            zIndex="2"
                            marginLeft={{ base: '0', sm: '5%' }}

                        >
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }} >
                                <Image
                                    borderRadius="lg"
                                    // border={"2px"}
                                    minW={"580px"}
                                    minH={"301px"}
                                    src={
                                        "../commencez1.O.gif"
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                    transition="0.3s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.05)',
                                    }}
                                />

                            </Link>
                        </Box>
                        <Box zIndex="1" width="100%" position="absolute" height="100%">
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(orange.600 1px, transparent 1px)',
                                    'radial(orange.300 1px, transparent 1px)'
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '0' }}>

                        <Heading marginTop="1">
                            <Link textDecoration="none" >
                                Commencez 1.O
                            </Link>
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            fontSize="lg">
                            Commencez 2.O was a one day hackathon where you have to either present a idea along with a small prototype, held back in 18th of november 2018 organized by department of bioengineering and technology i along with my friend we made a team called Biotopes participated in this hackathon and we acquired the first position
                        </Text>
                        <Heading size={"md"}>
                            <Link href='https://drive.google.com/drive/u/1/folders/1VanuLrip-0yTLMzjPWFFbZ8hLyoUO9h0'>Certificate <ExternalLinkIcon /> </Link>
                        </Heading>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '0' }}>

                        <Heading marginTop="1">
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                Utkranti 1.1
                            </Link>
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            fontSize="lg">
                            Utkranti 1.1 was my first 24hrs hackathon held in 10th-11th Nov 2018 where we were a the team of 5 i was leading the team there were a total of 20 teams from different colleges participated, we presented our idea along with the protototype but unfortunately we were unable to won that hackathon but it did gave me and my team a mental push and confidence to prove ourselves in the coming hackathons.

                        </Text>
                        <Heading size={"md"}>
                            <Link href='https://drive.google.com/drive/u/1/folders/1sedZLVNQAOWv8O6YQMCw5wLWrjAE8bym'>Certificate <ExternalLinkIcon /> </Link>
                        </Heading>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"


                        position="relative"
                        alignItems="center">
                        <Box
                            width={{ base: '100%', sm: '85%' }}
                            zIndex="2"
                            marginLeft={{ base: '0', sm: '5%' }}

                        >
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }} >
                                <Image
                                    borderRadius="lg"
                                    minW={"580px"}
                                    minH={"301px"}
                                    src={
                                        '../utkranti1.1.gif'
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                    transition="0.3s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.05)',
                                    }}
                                />

                            </Link>
                        </Box>
                        <Box zIndex="1" width="100%" position="absolute" height="100%">
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(orange.600 1px, transparent 1px)',
                                    'radial(orange.300 1px, transparent 1px)'
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        position="relative"
                        alignItems="center">
                        <Box
                            width={{ base: '100%', sm: '85%' }}
                            zIndex="2"
                            marginLeft={{ base: '0', sm: '5%' }}

                        >
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }} >
                                <Image
                                    borderRadius="lg"
                                    // border={"2px"}
                                    minW={"580px"}
                                    minH={"301px"}
                                    src={
                                        "../udyogam.png"
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                    transition="0.3s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.05)',
                                    }}
                                />

                            </Link>
                        </Box>
                        <Box zIndex="1" width="100%" position="absolute" height="100%">
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(orange.600 1px, transparent 1px)',
                                    'radial(orange.300 1px, transparent 1px)'
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '0' }}>

                        <Heading marginTop="1">
                            <Link textDecoration="none" >
                                Udyogam
                            </Link>
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            fontSize="lg">
                            Udyogam was an industrial meet held in 7th March 2019 our college where i got a chance to be a part of the team which was handling the offline registrations and Event Management
                        </Text>
                        <Heading size={"md"}>
                            <Link href='https://drive.google.com/drive/u/1/folders/1VanuLrip-0yTLMzjPWFFbZ8hLyoUO9h0'>Certificate <ExternalLinkIcon /> </Link>
                        </Heading>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '0' }}>

                        <Heading marginTop="1">
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                Utkranti 2.O
                            </Link>
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            fontSize="lg">
                            Utkranti 2.O hosted and promoted by GUIST startup and placement cell in association with Assam startup was my second 24hrs hackathon held in 14th-15th Sept 2019 almost more than 20 teams participated in this hackathon, this time we had a minor change in our team i was leading the team this time we made sure we avoid the mistakes made during Utkranti 1.O and worked upon it and we were the runners up.

                        </Text>
                        <Heading size={"md"}>
                            <Link href='https://drive.google.com/drive/u/1/folders/1wlD_8rRMnLO3aQxNg5A7NC5gYMJomI-k'>Certificate <ExternalLinkIcon /> </Link>
                        </Heading>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"


                        position="relative"
                        alignItems="center">
                        <Box
                            width={{ base: '100%', sm: '85%' }}
                            zIndex="2"
                            marginLeft={{ base: '0', sm: '5%' }}

                        >
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }} >
                                <Image
                                    borderRadius="lg"
                                    minW={"580px"}
                                    minH={"301px"}
                                    src={
                                        '../utkranti2.O.gif'
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                    transition="0.3s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.05)',
                                    }}
                                />

                            </Link>
                        </Box>
                        <Box zIndex="1" width="100%" position="absolute" height="100%">
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(orange.600 1px, transparent 1px)',
                                    'radial(orange.300 1px, transparent 1px)'
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                </SimpleGrid>


            </Box>
            <Box minH={"400px"} minW={"100%"} bgColor={"#2563EB"} >
                <Image minH={"400px"} minW={"100%"} src='https://assets.website-files.com/6133e256fb865fe4d677acbf/61ed1b464a15e4c33c0b6766_endctavave.svg'></Image>
            </Box>

            {/* <Heading as="h2" marginTop="5">
                Latest articles
            </Heading> */}
            {/* <Divider marginTop="5" /> */}
            {/* <Wrap spacing="30px" marginTop="5">
                <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
                    <Box w="100%">
                        <Box borderRadius="lg" overflow="hidden">
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image
                                    transform="scale(1.0)"
                                    src={
                                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="some text"
                                    objectFit="contain"
                                    width="100%"
                                    transition="0.3s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.05)',
                                    }}
                                />
                            </Link>
                        </Box>

                        <Heading fontSize="xl" marginTop="2">
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                Some blog title
                            </Link>
                        </Heading>
                        <Text as="p" fontSize="md" marginTop="2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </Text>

                    </Box>
                </WrapItem>
            </Wrap> */}
            {/* <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
                <Heading as="h2">What we write about</Heading>
                <Text as="p" fontSize="lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
                    pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
                    imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
                    sapien. Suspendisse placerat vulputate posuere. Curabitur neque
                    tortor, mattis nec lacus non, placerat congue elit.
                </Text>
                <Text as="p" fontSize="lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
                    pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
                    imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
                    sapien. Suspendisse placerat vulputate posuere. Curabitur neque
                    tortor, mattis nec lacus non, placerat congue elit.
                </Text>
                <Text as="p" fontSize="lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
                    pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
                    imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
                    sapien. Suspendisse placerat vulputate posuere. Curabitur neque
                    tortor, mattis nec lacus non, placerat congue elit.
                </Text>
            </VStack> */}
        </>
    );
};

export default Mainpage;