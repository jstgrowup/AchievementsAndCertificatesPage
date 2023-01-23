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
                    <Picture src={"https://media.giphy.com/media/06coO53tF3YGGMtnIH/giphy.gif"} />
                    <TextCompo link={"https://drive.google.com/file/d/1X4199c_-tGugDEZ9iWLa1p0EkHOZCqf9/view?usp=sharing"} heading={"Commencez 1.O"} text={"Commencez 1.O was an one-day Hackathon where we had to present an idea along with a small prototype. It was on the 18th of November 2018 and was organized by the Department of Bioengineering and Technology , I along with one of my friend made a team called Biotopes. We participated in this Hackathon and acquiring the first position."} />
                    <TextCompo link={"https://drive.google.com/file/d/1QEs09jPyAsy-sJV89wJbo0_I8gYoOLL-/view?usp=sharing"} heading={"Utkranti 1.1"} text={"Utkranti 1.1 was my first Hackathon of 24hrs  held on 10th-11th Nov,2018.I was leading a team of five members and there were a total of 20 teams from different colleges which participated in this Hackathon.We presented our idea along with the prototype and the judges approved of it.It was a great learning experience for our team,giving us confidence to do better in upcoming Hackathons."}></TextCompo>
                    <Picture src={"https://media.giphy.com/media/zJASBhOnQ4hfqxCANl/giphy.gif"} />
                    <Picture src={"https://user-images.githubusercontent.com/40628582/195350350-2bc77f3e-00e2-490a-a28c-878312d7525c.png"} />
                    <TextCompo link={"https://drive.google.com/file/d/1ZDd46FMzblw_Ew6BM4LwFNmEkE3I9uwo/view?usp=sharing"} heading={"Udyogam"} text={"Udyogam was an Industrial Meet held on 7th March 2019 at our college where I got a chance to be a part of the team which was handling the offline registrations and Event Management."}></TextCompo>
                    <TextCompo link={"https://drive.google.com/file/d/1ZDPbwCi-kdSbGIRGMizueYKY2KBc9I1X/view"} heading={" Utkranti 2.O"} text={"Utkranti 2.O was hosted and promoted by GUIST startup and placement cell in association with Assam startup becoming my second 24hrs Hackathon held on 14th-15th Sept 2019. More than 20 teams participated in this Hackathon and I was leading the team  making sure that we avoid the mistakes that we made during Utkranti 1.1. This led us to successfully acquire the runners up position in it."}></TextCompo>
                    <Picture src={"https://media.giphy.com/media/eBCBr7bHi7lWUe1PBN/giphy.gif"} />
                    <Picture src={"https://media.giphy.com/media/MhR8DOGjCKt58CuEQL/giphy.gif"} />
                    <TextCompo link={"https://drive.google.com/file/d/1YQ7j6HdLjsWlXR2ov98XL_XoxBpFbeIp/view"} heading={"Commencez 2.O"} text={"Commencez 2.O was a 10 hours Hackathon that was held on the 7th of march organized by the Department of Bioengineering and Technology. We were a team of seven students who organized this whole event and I was leading the team which was responsible for inviting and handling the judges and the guests."}></TextCompo>
                    <TextCompo link={"https://drive.google.com/file/d/1HPaEf0L1jy_6z2EnC18NAnZkhiCWMVlV/view"} heading={"National Seminar On Directions and Opportunities for Implementing Education Policy 2020 in Noth-East"} text={"This was a National seminar jointly organized by The Shiksha Sanskriti Utthan Nyas (North-East) and Gauhati University on 27-28 February 2021. This meeting comprised of Educationists, Vice-Chancellors of Gauhati university and Tripura university along with Directors of various institutes of higher learning in the North-East region, where I got a chance to be a part of the team that was handling the offline registration and guests."}></TextCompo>
                    <Picture src={"https://media.giphy.com/media/3y7lhekWSFZwougUU2/giphy.gif"} />
                </SimpleGrid >


            </Box >
            <Box minH={"400px"} w={"100%"} bgColor={"#2563EB"} border="none">
                <Image minH={"400px"} minW={"100%"} src='https://assets.website-files.com/6133e256fb865fe4d677acbf/61ed1b464a15e4c33c0b6766_endctavave.svg'></Image>
            </Box>


        </>
    );
};

export default Mainpage;