import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import styles from "./Cubes.module.css";
import { AiOutlineShoppingCart, AiOutlineTag } from "react-icons/ai"
import { FiArrowUpLeft, FiArrowDownRight } from "react-icons/fi"
import { BsBox } from "react-icons/bs"
import { PiNotepadLight } from "react-icons/pi"
import SmallChart from './SmallChart';
import SmallBar from './SmallBar';



const Cubes = () => {

    return (
        <div>
            <Box  w="100%" h="auto" mt="30px">
                <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing={2}>
                    <Box height='auto'    w={{ base: "100%", sm: '100%', md: "100%", lg: "115%" }}>
                        <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing={2}>
                            <Box   className='b1' height='300px'  w={{ base: "100%", sm: '100%', md: "100%", lg: "120%" }} display="flex" justifyContent="center" alignItems={"center"} >
                                <Box className={styles.gradient} w="95%" h="240px" borderRadius={"20px"} display="flex">
                                    <Box w="60%" h="100%"   >
                                        <Box w="95%" m="auto" mt='30px'  padding="10px">
                                            <Text color="white" fontSize={{ base: "20px", sm: '18px', md: "24px", lg: "28px" }} fontFamily={'fantasy'}>Welcome to Cube</Text>
                                            <Text color="white" fontSize={{ base: "15px", sm: '15px', md: "15px", lg: "16px" }} fontFamily={'sans-serif'}>Here Whats happing in your account today</Text>

                                        </Box>
                                        <Box  w="60%" h="45px" mt="30px" ml="20px" borderRadius={"10px"} display="flex" justifyContent="center" alignItems={"center"}>
                                            <Text color="white" fontFamily={"sans-serif"} fontSize={"16px"} >What New !</Text>

                                        </Box>

                                    </Box>
                                    <Box w="40%" h="100%"  >
                                        <Box h="30%"  w="100%">


                                        </Box>
                                        <Box h="70%"  w="100%">
                                            <Image h="120%" w="100%" src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/cartoon.svg" />
                                        </Box>

                                    </Box>

                                </Box>

                            </Box>
                            <Box className='b2'   height='300px'  w={{ base: "100%", sm: '100%', md: "100%", lg: "80%" }} ml={{ base: "none", sm: "none", md: "none", lg: "20%" }} display="flex" justifyContent="center" alignItems={"center"}>
                                <Box h="80%" w="100%"  m="auto" >
                                    <Box h="40%" w="95%"  m="auto" mt="20px" borderRadius={"10px"} display="flex" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                                        <Box h="100%" w={{ base: "100%", sm: "50%", md: "50%", lg: "100%" }}  display={"flex"} alignItems={"center"}>
                                            <Box w="80px" border="1px solid black" h="80px"  borderRadius={"50%"} ml="10px" borderColor={"#f73164"} borderLeftWidth={'4px'} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                                <AiOutlineShoppingCart style={{ height: "35px", width: "35px", color: "#f73164" }} />
                                            </Box>
                                            <Box ml="10px" >
                                                <Text fontSize={"29px"} fontWeight={"600"} color="#212529">10,000</Text>
                                                <Text fontSize={"18px"} color="#52526C">Purchase</Text>

                                            </Box>
                                        </Box>
                                        <Box h="100%" w="50%"  display={{ base: "", lg: "none" }}  >
                                            <Box className='b1'  h="40px " w="100%" mt="40px" display={"flex"} justifyContent={"end"} alignItems={"center"}>
                                                {/* <Box  h="40px " w="50%" display={"flex"} justifyContent={"end"}>
                                                
                                            </Box> */}

                                                <FiArrowUpLeft style={{ height: "25px", width: "25px", color: "#f73164" }} />
                                                <Text color="#f73164" fontFamily={"sans-serif"} fontSize={"20px"}>+50%</Text>


                                            </Box>

                                        </Box>
                                    </Box>
                                    <Box h="40%" w="95%"  m="auto" mt="20px" borderRadius={"10px"} display="flex" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                                        <Box h="100%"  w={{ base: "100%", sm: "50%", md: "50%", lg: "100%" }}  display={"flex"} alignItems={"center"}>
                                            <Box w="80px" border="1px solid black" h="80px"  borderRadius={"50%"} ml="10px" borderColor={"#7366ff"} borderLeftWidth={'4px'} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                                <AiOutlineTag style={{ height: "35px", width: "35px", color: "#7366ff" }} />
                                            </Box>
                                            <Box ml="10px" >
                                                <Text fontSize={"29px"} fontWeight={"600"} color="#212529">4,200</Text>
                                                <Text fontSize={"18px"} color="#52526C">Sales</Text>

                                            </Box>
                                        </Box>
                                        <Box h="100%" w="50%"  display={{ base: "", lg: "none" }}  >
                                            <Box className='b1'  h="40px " w="100%" mt="40px" display={"flex"} justifyContent={"end"} alignItems={"center"}>
                                                {/* <Box  h="40px " w="50%" display={"flex"} justifyContent={"end"}>
                                                
                                            </Box> */}

                                                <FiArrowUpLeft style={{ height: "25px", width: "25px", color: "#7366ff" }} />
                                                <Text color="#7366ff" fontFamily={"sans-serif"} fontSize={"20px"}>+70%</Text>


                                            </Box>

                                        </Box>
                                    </Box>

                                </Box>

                            </Box>

                        </SimpleGrid>

                    </Box>
                    <Box height='auto'  w={{ base: "100%", sm: '100%', md: "100%", lg: "85%" }} ml={{ base: "none", sm: "none", md: "none", lg: "15%" }} alignItems={"center"}>
                        <SimpleGrid w="98%" columns={{ base: "1", sm: "1", md: "1", lg: "2" }} spacing={5} m="auto" mt="50px">

                            <Box h="96px" w="95%"  m="auto" borderRadius={"10px"} display="flex" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                                <Box h="100%" w={{ base: "100%", sm: "50%", md: "50%", lg: "100%" }}  display={"flex"} alignItems={"center"}>
                                    <Box w="80px" border="1px solid black" h="80px"  borderRadius={"50%"} ml="10px" borderColor={"#FFAA05"} borderLeftWidth={'4px'} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                        <AiOutlineShoppingCart style={{ height: "35px", width: "35px", color: "#FFAA05" }} />
                                    </Box>
                                    <Box ml="10px" >
                                        <Text fontSize={"29px"} fontWeight={"600"} color="#212529">7,000</Text>
                                        <Text fontSize={"18px"} color="#52526C">Sales Return</Text>

                                    </Box>
                                </Box>
                                <Box h="100%" w="50%"  display={{ base: "", lg: "none" }}  >
                                    <Box className='b1'  h="40px " w="100%" mt="40px" display={"flex"} justifyContent={"end"} alignItems={"center"}>
                                        {/* <Box  h="40px " w="50%" display={"flex"} justifyContent={"end"}>
                                                
                                            </Box> */}

                                        <FiArrowDownRight style={{ height: "25px", width: "25px", color: "#FFAA05" }} />
                                        <Text color="#FFAA05" fontFamily={"sans-serif"} fontSize={"20px"}>-20%</Text>


                                    </Box>

                                </Box>
                            </Box>
                            <Box h="96px" w="95%"  m="auto" borderRadius={"10px"} display="flex" justifyContent={'space-between'} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                                <Box h="100%" w={{ base: "40%", sm: "40%", md: "40%", lg: "40%" }}  display={"flex"} alignItems={"center"}>
                                    <Box ml="10px" >
                                        <Text fontSize={"29px"} fontWeight={"600"} color="#212529" as='b'>1,80K</Text>
                                        <Text fontSize={"18px"} color="#52526C">Orders</Text>

                                    </Box>
                                </Box>
                                <Box h="100%" w={{ base: "60%", sm: "60%", md: "60%", lg: "60%" }}    >
                                    <SmallBar />

                                </Box>
                            </Box>
                            <Box h="96px" w="95%"  m="auto" borderRadius={"10px"} display="flex" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                                <Box h="100%" w={{ base: "100%", sm: "50%", md: "50%", lg: "100%" }}  display={"flex"} alignItems={"center"}>
                                    <Box w="80px"  border="1px solid black" h="80px"  borderRadius={"50%"} ml="10px" borderColor={"#54BA4A"} borderLeftWidth={'4px'} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                        <AiOutlineShoppingCart style={{ height: "35px", width: "35px", color: "#54BA4A" }} />
                                    </Box>
                                    <Box ml="10px" >
                                        <Text fontSize={"29px"} fontWeight={"600"} color="#212529">5,700</Text>
                                        <Text fontSize={"18px"} color="#52526C">Purchase Rate</Text>

                                    </Box>
                                </Box>
                                <Box h="100%" w="50%"  display={{ base: "", lg: "none" }}  >
                                    <Box className='b1'  h="40px " w="100%" mt="40px" display={"flex"} justifyContent={"end"} alignItems={"center"}>
                                        {/* <Box  h="40px " w="50%" display={"flex"} justifyContent={"end"}>
                                                
                                            </Box> */}

                                        <FiArrowUpLeft style={{ height: "25px", width: "25px", color: "#54BA4A" }} />
                                        <Text color="#54BA4A" fontFamily={"sans-serif"} fontSize={"20px"}>+70%</Text>


                                    </Box>

                                </Box>
                            </Box>
                            <Box h="96px" w="95%"  m="auto" borderRadius={"10px"} display="flex" justifyContent={'space-between'} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                                <Box h="100%" w={{ base: "40%", sm: "40%", md: "40%", lg: "40%" }}  display={"flex"} alignItems={"center"}>
                                    <Box ml="10px" >
                                        <Text fontSize={"29px"} fontWeight={"600"} color="#212529" as='b'>6,90K</Text>
                                        <Text fontSize={"18px"} color="#52526C">Profit</Text>

                                    </Box>
                                </Box>
                                <Box h="100%" w={{ base: "60%", sm: "60%", md: "60%", lg: "60%" }}    >
                                    <SmallChart />

                                </Box>
                            </Box>





                        </SimpleGrid>


                    </Box>

                </SimpleGrid>


            </Box>
        </div>
    )
}

export default Cubes