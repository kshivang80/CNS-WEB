import React from 'react'
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import "./Total.css"

import {  FiUserPlus, FiUserMinus } from "react-icons/fi";
import {
 
  BsArrowUpLeft,
  BsArrowDownRight,
} from "react-icons/bs";
import BigLine from './BigLine';
import { Button } from '@chakra-ui/react';

const Total = () => {
  

  return (
    <div style={{marginTop:"40px"}}>
        <div className="lastDiv">
            <div className="leftDiv">
              <div className="totalUser">
                <div >
                  <p style={{fontSize:"20px",fontWeight:"bold"}}>Total Users</p>
                </div>
                <div className="UserData" >
                  <div>
                    <div>
                      <FiUserPlus />
                    </div>
                    <div>
                      <h3>178,098</h3>
                      <p>
                        <BsArrowUpLeft />
                        +30.89
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <FiUserMinus />
                    </div>
                    <div>
                      <h3>178,098</h3>
                      <p>
                        <BsArrowDownRight />
                        -08.89
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div  style={{width:"100%",backgroundColor:"white",borderRadius:"10px",padding:"30px",marginTop:"20px",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                <div >
                  <p style={{fontSize:"20px",fontWeight:"bold"}}>Followers Growth</p>
                </div>
                <div  style={{width:"100%",height:"200px"}}>
                  
                  <BigLine/>
                </div>
              </div>
            </div>
            <div  style={{width:"100%",backgroundColor:"white",borderRadius:"10px",padding:"30px",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
              <div >
                <p style={{fontSize:"20px",fontWeight:"bold"}}>Paper Note</p>
              </div>
              <div className="paperNote">
                <img
                  src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/papernote.jpg"
                  alt="img"
                />
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <div>
                  <Button>SAAS</Button>
                  <Button>E-commerce</Button>
                  <Button>Crypto</Button>
                  <Button>Project</Button>
                  <Button>SAAS</Button>
                  <Button>+9</Button>
                </div>
                <div className="userListData">
                  <Avatar.Group
                    maxCount={5}
                    size="large"
                    maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                  >
                    <Avatar src="https://bit.ly/ryan-florence" />
                    <Avatar src="https://bit.ly/dan-abramov" />
                    <Avatar src="https://bit.ly/kent-c-dodds" />
                    <Avatar src="https://bit.ly/code-beast" />
                    <Avatar src="https://bit.ly/sage-adebayo" />
                    <Tooltip title="Ant User" placement="top">
                      <Avatar
                        style={{ backgroundColor: "#87d068" }}
                        icon={<UserOutlined />}
                      />
                    </Tooltip>
                    <Avatar
                      style={{ backgroundColor: "#1677ff" }}
                      icon={<AntDesignOutlined />}
                    />
                  </Avatar.Group>
                  <span>$379,478 (Budget)</span>
                </div>
              </div>
            </div>
          </div>
        
    </div>
  )
}

export default Total