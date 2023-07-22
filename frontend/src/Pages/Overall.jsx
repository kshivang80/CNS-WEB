import React from 'react'

import { BsDownload } from "react-icons/bs";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { PiCurrencyCircleDollarLight } from "react-icons/pi"
import BigBar from './BigBar';
import "./Overall.css"
import { Box } from '@chakra-ui/react';
import PieChartComp from '../Pages/PieChart';

const Overall = () => {

    return (
        <div className='main' style={{height:"auto",marginTop:"30px"}}>
            <Box className="chartsDiv">
                <div className='DivChart'>
                    <div  style={{fontSize:"20px",fontWeight:"600",letterSpacing:"0.5px" ,color:"rgb(36, 33, 33)",paddingBottom:"25px",borderBottom:"1px solid rgb(231, 231, 231)"}}>
                        <p>Overall Balance</p>
                    </div>
                    <div className="MainDivChart">
                        <div className="MainDivChart1">

                            <BigBar />
                        </div>
                        <div className="MainDivChart2">
                            <div>
                                <BsDownload />
                                <div>
                                    <p>Income</p>
                                    <h4>$22,678</h4>
                                </div>
                                <p>+$456</p>
                            </div>
                            <div>
                                <LiaHandHoldingUsdSolid />
                                <div>
                                    <p>Expense</p>
                                    <h4>$12,057</h4>
                                </div>
                                <p>+$256</p>
                            </div>
                            <div>
                                <PiCurrencyCircleDollarLight />
                                <div>
                                    <p>Cashback</p>
                                    <h4>8,475</h4>
                                </div>
                                <p>+$256</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pieChartDiv">
                    <div style={{fontSize:"20px",fontWeight:"600",letterSpacing:"0.5px" ,color:"rgb(36, 33, 33)",paddingBottom:"25px",borderBottom:"1px solid rgb(231, 231, 231)"}}>
                        <p>Recent Orders</p>
                    </div>
                    <div className="MainpieBox">
                       
                        <PieChartComp/>
                        <div className="CenterpieData">
                            <span>100</span>
                            <p>Total Profit</p>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default Overall