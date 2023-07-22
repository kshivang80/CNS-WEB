import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import styles from "./Home.module.css";
import Cubes from './Cubes';
import Activity from './Activity';
import Overall from './Overall';
import Total from './Total';


const Home = () => {





  return (
    <div className={styles.mainDiv} style={{  height: "auto" }}>

      <Box  display={"flex"} justifyContent={"space-between"} h="50px" w="100%" boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">
        <Box  w={{base:"50%", md:"40%",lg:"30%"}} display={'flex'} alignItems={"center"} textAlign={"center"}>
          <Text as='b' ml={'20px'} fontSize={{base:"20px", md:"20px",lg:"27px"}} color="#2F2F3B" fontFamily={"sans-serif"}>Default</Text>
        </Box>
        <Box  w={{base:"45%", md:"40%",lg:"30%"}} color="#2F2F3B" display={'flex'} alignItems={"center"} textAlign={"center"}>
          <Breadcrumb >
            <BreadcrumbItem>
              <BreadcrumbLink  >
             
              <AiOutlineHome className={styles.icone} />
              
             

                
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
              <Text fontSize={{base:"12px", md:"12px",lg:"16px"}} fontFamily={"sans-serif"}>Dashboard</Text>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
            <Text fontSize={{base:"12px", md:"12px",lg:"16px"}} fontFamily={"sans-serif"}>Default</Text>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

      </Box>

      
      <Box >
      <Cubes/>
      </Box>
      <Overall/>
      
      <Activity/>
      <Total/>
      


    </div>
  )
}

export default Home