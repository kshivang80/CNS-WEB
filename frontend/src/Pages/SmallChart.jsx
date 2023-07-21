import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2100,
    amt: 2400,
  },
  {
    name: 'Page F',
    uv: 4000,
    pv: 1000,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 6500,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 2100,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 3000,
    pv: 6500,
    amt: 2210,
  },
  {
    name: 'Page E',
    uv: 2000,
    pv: 2100,
    amt: 2290,
  },
  
  {
    name: 'Page F',
    uv: 3000,
    pv: 6500,
    amt: 2210,
  },
  {
    name: 'Page G',
    uv: 2000,
    pv: 2100,
    amt: 2290,
  },
];

const SmallChart = () => {
  return (
    <ResponsiveContainer width="100%" height={96}>
      <LineChart width={"100%"} height={96} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <XAxis dataKey="name" />
        <YAxis /> */}
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#92c6f0" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SmallChart;
