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

import Typewriter from 'typewriter-effect';

const Mainpage = () => {
    return (
        <>
            <Box border={"none"} bgColor={"#2563EB"} color={"white"} p={["3", "5", "10", "12"]} w="100%">
                <Center >

                    <Heading size={"2xl"}>
                        <Typewriter
                            options={{
                                strings: ["Certificates and Accomplishments"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Heading>

                </Center>
                <SimpleGrid columns={[1, 1, 1, 2]} gap={"37"} mt={"39"} w={"100%"} >
                    <Picture src={"https://i.ibb.co/FDXBCqC/commencez1-O.gif"} />
                    <TextCompo link={"https://drive.google.com/file/d/1X4199c_-tGugDEZ9iWLa1p0EkHOZCqf9/view?usp=sharing"} heading={" Commencez 1.O"} text={"Commencez 1.O was a one-day hackathon where we had to present an idea along with a small prototype, it was on the 18th of November 2018 and was organized by the department of bioengineering and technology.I along with one of my friend made a team called Biotopes. We participated in this hackathon and acquired the first position."} />
                    <TextCompo link={"https://drive.google.com/file/d/1QEs09jPyAsy-sJV89wJbo0_I8gYoOLL-/view?usp=sharing"} heading={" Utkranti 1.1"} text={"Utkranti 1.1 was my first 24hrs hackathon held on 10th-11th Nov 2018.I was leading a team of five members and there were a total of 20 teams from different colleges which participated in this hackathon.We presented our idea along with the prototype and the judges liked our idea.It was a great learning experience for our team and also gave us confidence to do better in upcoming hackathons."}></TextCompo>
                    <Picture src={"https://i.ibb.co/NYsndVB/utkranti1-1.gif"} />
                    <Picture src={"https://i.ibb.co/fNPFqgP/udyogam.png"} />
                    <TextCompo link={"https://drive.google.com/file/d/1ZDd46FMzblw_Ew6BM4LwFNmEkE3I9uwo/view?usp=sharing"} heading={"Udyogam"} text={"Udyogam was an Industrial Meet held on 7th March 2019 at our college where I got a chance to be a part of the team which was handling the offline registrations and Event Management."}></TextCompo>
                    <TextCompo link={"https://drive.google.com/file/d/1ZDPbwCi-kdSbGIRGMizueYKY2KBc9I1X/view"} heading={" Utkranti 2.O"} text={"Utkranti 2.O hosted and promoted by GUIST startup and placement cell in association with Assam startup was my second 24hrs hackathon held on 14th-15th Sept 2019.More than 20 teams participated in this hackathon .I was leading the team this time we made sure we avoid the mistakes that we made during Utkranti 1.1 and worked upon it and we were successful to acquire the runners up position for us."}></TextCompo>
                    <Picture src={"https://i.ibb.co/mT9D5Kc/utkranti2-O.gif"} />
                    <Picture src={"https://i.ibb.co/kXyDMk8/Commencez2-O.gif"} />
                    <TextCompo link={"https://drive.google.com/file/d/1YQ7j6HdLjsWlXR2ov98XL_XoxBpFbeIp/view"} heading={"Commencez 2.O"} text={"Commencez 2.O was a 10 hours hackathon that was held on the 7th of march and organized by the department of Bioengineering and Technology. We were a team of seven students who organized this whole event I was leading the team, which was responsible for inviting and handling the judges and the guests."}></TextCompo>
                    <TextCompo link={"https://drive.google.com/file/d/1HPaEf0L1jy_6z2EnC18NAnZkhiCWMVlV/view"} heading={"National Seminar On Directions and Opportunities for Implementing Education Policy 2020 in Noth-East"} text={"This was a National seminar jointly organized by The Shiksha Sanskriti Utthan Nyas (North-East) and Gauhati University on 27-28 February 2021. This meeting comprised of Educationists, Vice-Chancellors of Gauhati university and Tripura university along with Directors of various institutes of higher learning in the North-East region, I got a chance to be a part of the team that was handling the offline registration and guests."}></TextCompo>
                    <Picture src={"https://i.ibb.co/nnm6X9c/NEP.gif"} />
                </SimpleGrid >


            </Box >
            <Box minH={"400px"} w={"100%"} bgColor={"#2563EB"} border="none">
                <Image minH={"400px"} minW={"100%"} src='https://assets.website-files.com/6133e256fb865fe4d677acbf/61ed1b464a15e4c33c0b6766_endctavave.svg'></Image>
            </Box>


        </>
    );
};

export default Mainpage;