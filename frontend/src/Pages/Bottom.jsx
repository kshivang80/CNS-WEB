import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Bottom = () => {
  return (
    <div style={{marginTop:"20px"}}>
        <Box borderRadius={"20px"}  h="50px" w="100%" boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" display={"flex"} justifyContent={"center"}  alignItems={"center"} >
            <Text fontSize={{base:"16px",sm:"15px",md:"16px",lg:"18px"}} fontWeight={"500"} fontFamily="inherit">Copyright 2023 © Cuba theme by Shivang kumar</Text>

        </Box>

    </div>
  )
}

export default Bottom