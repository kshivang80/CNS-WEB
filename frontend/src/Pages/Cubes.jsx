import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import styles from "./Cubes.module.css";



const Cubes = () => {
    return (
        <div>
            <Box border="1px solid yellow" w="100%" h="800px" mt="30px">
                <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing={2}>
                    <Box height='300px' border="1px solid blue" w={{ base: "100%", sm: '100%', md: "100%", lg: "115%" }}>
                        <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing={2}>
                            <Box className='b1' height='300px' border="1px solid black" w={{ base: "100%", sm: '100%', md: "100%", lg: "120%" }} display="flex" justifyContent="center" alignItems={"center"} >
                                <Box className={styles.gradient} w="95%" h="240px" borderRadius={"20px"} display="flex">
                                    <Box w="60%" h="100%" border="1px solid white"  >
                                        <Box w="95%" m="auto" mt='30px' border="1px solid pink" padding="10px">
                                            <Text color="white" fontSize={{ base: "20px", sm: '18px', md: "24px", lg: "28px" }} fontFamily={'fantasy'}>Welcome to Cube</Text>
                                            <Text color="white" fontSize={{ base: "15px", sm: '15px', md: "15px", lg: "16px" }} fontFamily={'sans-serif'}>Here Whats happing in your account today</Text>

                                        </Box>
                                        <Box border="1px solid white" w="60%" h="45px" mt="30px" ml="20px" borderRadius={"10px"} display="flex" justifyContent="center" alignItems={"center"}>
                                            <Text color="white" fontFamily={"sans-serif"} fontSize={"16px"} >What New !</Text>

                                        </Box>

                                    </Box>
                                    <Box w="40%" h="100%" border="1px solid white" >
                                        <Box h="30%" border="1px solid black" w="100%">
                                            

                                        </Box>
                                        <Box h="70%" border="1px solid black" w="100%">
                                            <Image  h="120%" w="100%" src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/cartoon.svg"/>
                                        </Box>

                                    </Box>

                                </Box>

                            </Box>
                            <Box className='b2' height='300px' border="1px solid black" w={{ base: "100%", sm: '100%', md: "100%", lg: "80%" }} ml={{ base: "none", sm: "none", md: "none", lg: "20%" }} display="flex" justifyContent="center" alignItems={"center"}>
                                  <Box h="80%" w="100%" border="1px solid black" m="auto" >
                                    <Box h="40%" w="95%" border="1px solid black"  m="auto" mt="20px" borderRadius={"10px"} display="flex" >
                                         
                                    </Box>
                                    <Box h="40%" w="95%" border="1px solid black"  m="auto" mt="10px" borderRadius={"10px"}> 
                                    </Box>

                                  </Box>
                                
                            </Box>

                        </SimpleGrid>

                    </Box>
                    <Box height='300px' border="1px solid green" w={{ base: "100%", sm: '100%', md: "100%", lg: "85%" }} ml={{ base: "none", sm: "none", md: "none", lg: "15%" }}>

                    </Box>

                </SimpleGrid>


            </Box>
        </div>
    )
}

export default Cubes