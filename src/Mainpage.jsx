import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,

    Center,
    SimpleGrid,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Picture from './Picture';
import TextCompo from './Text';



const Mainpage = () => {
    return (
        <>
            <Box border={"none"} bgColor={"#2563EB"} color={"white"} p={["3", "5", "10", "12"]} w="100%">
                <Center >
                    <Heading size={"2xl"}>Certificates and Achievements</Heading>
                </Center>
                <SimpleGrid columns={[1, 1, 1, 2]} gap={"37"} mt={"39"} w={"100%"} >
                    <Picture src={"https://i.ibb.co/FDXBCqC/commencez1-O.gif"} />
                    <TextCompo link={"https://drive.google.com/file/d/1X4199c_-tGugDEZ9iWLa1p0EkHOZCqf9/view?usp=sharing"} heading={" Commencez 1.O"} text={" Commencez 2.O was a one day hackathon where you have to either present a idea along with a small prototype, held back in 18th of november 2018 organized by department of bioengineering and technology i along with my friend we made a team called Biotopes participated in this hackathon and we acquired the first position"} />
                    <TextCompo link={"https://drive.google.com/file/d/1QEs09jPyAsy-sJV89wJbo0_I8gYoOLL-/view?usp=sharing"} heading={" Utkranti 1.1"} text={"  Utkranti 1.1 was my first 24hrs hackathon held in 10th-11th Nov 2018 where we were a the team of 5 i was leading the team there were a total of 20 teams from different colleges participated, we presented our idea along with the protototype but unfortunately we were unable to won that hackathon but it did gave me and my team a mental push and confidence to prove ourselves in the coming hackathons."}></TextCompo>
                    <Picture src={"https://i.ibb.co/NYsndVB/utkranti1-1.gif"} />
                    <Picture src={"https://i.ibb.co/fNPFqgP/udyogam.png"} />
                    <TextCompo link={"https://drive.google.com/file/d/1ZDd46FMzblw_Ew6BM4LwFNmEkE3I9uwo/view?usp=sharing"} heading={"Udyogam"} text={" Udyogam was an industrial meet held in 7th March 2019 our college where i got a chance to be a part of the team which was handling the offline registrations and Event Management"}></TextCompo>
                    <TextCompo link={"https://drive.google.com/file/d/1ZDPbwCi-kdSbGIRGMizueYKY2KBc9I1X/view"} heading={" Utkranti 2.O"} text={" Utkranti 2.O hosted and promoted by GUIST startup and placement cell in association with Assam startup was my second 24hrs hackathon held in 14th-15th Sept 2019 almost more than 20 teams participated in this hackathon, this time we had a minor change in our team i was leading the team this time we made sure we avoid the mistakes made during Utkranti 1.O and worked upon it and we were the runners up."}></TextCompo>
                    <Picture src={"https://i.ibb.co/mT9D5Kc/utkranti2-O.gif"} />
                    <Picture src={"https://i.ibb.co/kXyDMk8/Commencez2-O.gif"} />
                    <TextCompo link={"https://drive.google.com/file/d/1YQ7j6HdLjsWlXR2ov98XL_XoxBpFbeIp/view"} heading={"Commencez 2.O"} text={"Commencez 2.O was a 10 hours hackathon that was held in 7th march organized by the department of Bioengineering and technology we were a team of 7 students who organized this whole event i was leading the judges and the guests team from inviting"}></TextCompo>
                    <TextCompo link={"https://drive.google.com/file/d/1HPaEf0L1jy_6z2EnC18NAnZkhiCWMVlV/view"} heading={"National Seminar On Directions and Oppurtunities for Implementing Education Policy 2020 in Noth-East"} text={"hdgas"}></TextCompo>
                    <Picture src={"https://i.ibb.co/nnm6X9c/NEP.gif"}/>
                </SimpleGrid >


            </Box >
            <Box minH={"400px"} w={"100%"} bgColor={"#2563EB"} border="none">
                <Image minH={"400px"} minW={"100%"} src='https://assets.website-files.com/6133e256fb865fe4d677acbf/61ed1b464a15e4c33c0b6766_endctavave.svg'></Image>
            </Box>


        </>
    );
};

export default Mainpage;