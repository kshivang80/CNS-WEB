import React from 'react'
import { Avatar, Box, Button, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Select, SimpleGrid, Text } from '@chakra-ui/react'
import { Dataactivity, sales } from '../Data'
import Example from './Example'

const Activity = () => {



    return (
        <div>
            <Box w="100%" h="auto" mt="30px">
                <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 3 }} spacing={10}>
                    <Box h="500px" borderRadius={"15px"} boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px">
                        <Box h="80px" display={"flex"} justifyContent={"space-between"}>
                            <Box h="100%" w="50%" display="flex" alignItems={"center"} padding="5px">
                                <Text fontFamily={"sans-serif"} fontSize={"24px"} as="b" ml="10px">Activity</Text>
                            </Box>
                            <Box h="100%" w="40%" display={"flex"} alignItems={"center"} padding="10px">
                                <Select w="90%">
                                    <option value='Today'>Today</option>
                                    <option value='option2'>Tommorrow</option>
                                    <option value='option3'>Yesterday</option>
                                </Select>

                            </Box>

                        </Box>
                        {Dataactivity.map((ele) => (
                            <Box h="140px" display={"flex"} justifyContent={"space-between"}>
                                <Box h="100%" w="70%" display={"flex"}>
                                    <Box w="15%" h="100%"  display={"flex"} justifyContent={"center"} alignItems={"center"} padding="10px">
                                        <RangeSlider
                                            aria-label={['min', 'max']}
                                            colorScheme='purple'
                                            defaultValue={[10, 30]}
                                            orientation='vertical'
                                            minH='32'
                                        >
                                            <RangeSliderTrack>
                                                <RangeSliderFilledTrack />
                                            </RangeSliderTrack>
                                           
                                            <RangeSliderThumb index={1} />
                                        </RangeSlider>

                                    </Box>
                                    <Box w="85%" h="100%" >
                                        <Button bg="white" variant='ghost' mt='5px'>
                                            <Text fontFamily={"inherit"} fontSize={{ base: "18px", sm: "18px", md: "16px", lg: "16px" }} color="gray.500">{ele.date}</Text>
                                        </Button>

                                        <Text mt="20px" fontFamily={"inherit"} fontWeight={"700"} fontSize={{ base: "25px", sm: "25px", md: "22px", lg: "20px" }} >
                                            {ele.data1}
                                        </Text>
                                        <Text mt="5px" fontFamily={"inherit"} fontSize={{ base: "20px", sm: "20px", md: "16px", lg: "17px" }} color="gray.500" noOfLines={1}>
                                            {ele.data2}
                                        </Text>

                                    </Box>

                                </Box>
                                <Box h="100%" w="30%"  >
                                    <Text fontFamily={"inherit"} fontSize={{ base: "18px", sm: "18px", md: "16px", lg: "18px" }} color={'gray.500'} mt="5px">{ele.date1}</Text>

                                </Box>

                            </Box>
                        ))

                        }


                    </Box>
                    <Box h="500px" borderRadius={"15px"} boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px">

                        <Box h="80px" display={"flex"} justifyContent={"space-between"}>
                            <Box h="100%" w="50%" display="flex" alignItems={"center"} padding="5px">
                                <Text fontFamily={"sans-serif"} fontSize={"24px"} as="b" ml="10px">Recent Sales</Text>
                            </Box>
                            <Box h="100%" w="40%" display={"flex"} alignItems={"center"} padding="10px">
                                <Select w="90%">
                                    <option value='Today' color="purple">Today</option>
                                    <option value='option2'>Tommorrow</option>
                                    <option value='option3'>Yesterday</option>
                                </Select>

                            </Box>

                        </Box>

                        {sales.map((ele) => (
                            <Box h="80px" display={"flex"} justifyContent={"space-between"}>
                                <Box h="100%" w="70%" display={"flex"}>
                                    <Box w="30%" h="100%" display="flex" justifyContent={"center"} alignItems={"center"}>
                                        <Avatar
                                            size={{ base: "md", sm: "lg", md: "lg", lg: "md" }}
                                            name='Prosper Otemuyiwa'
                                            src={ele.image}
                                            ml="5px"
                                        />

                                    </Box>
                                    <Box w="70%" h="100%"   >

                                        <Box mt="5px">
                                            <Text fontSize={"20px"} as="b" fontFamily={"inherit"} color="balck" >{ele.name}</Text>
                                            <Text fontSize={"16px"} fontFamily={"inherit"} color="gray">{ele.time}</Text>
                                        </Box>


                                    </Box>

                                </Box>
                                <Box h="100%" w="30%" display={"flex"} alignItems={"center"} justifyContent={"end"} padding={"10px"}>
                                    <Text fontFamily={"inherit"} fontSize={{ base: "18px", sm: "18px", md: "16px", lg: "18px" }} color={'green'} >{ele.price}</Text>

                                </Box>

                            </Box>
                        ))}



                    </Box>
                    <Box h="500px" borderRadius={"15px"} boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px">
                        <Box h="80px" display={"flex"} justifyContent={"space-between"}>
                            <Box h="100%" w="50%" display="flex" alignItems={"center"} padding="5px">
                                <Text fontFamily={"sans-serif"} fontSize={"24px"} as="b" ml="10px">TimeLine</Text>
                            </Box>
                            <Box h="100%" w="40%" display={"flex"} alignItems={"center"} padding="10px">
                                <Select w="90%">
                                    <option value='Today'>Today</option>
                                    <option value='option2'>Tommorrow</option>
                                    <option value='option3'>Yesterday</option>
                                </Select>

                            </Box>

                        </Box>
                        <Box h="400px" mt="20px">
                            <Example/>

                        </Box>
                    </Box>

                </SimpleGrid>

            </Box>

        </div>
    )
}

export default Activity