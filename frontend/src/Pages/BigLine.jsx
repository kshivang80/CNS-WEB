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
    name: 'Jan',
    uv: 4000,
    pv: 2100,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 4000,
    pv: 1000,
    amt: 2400,
  },
  {
    name: 'Mar',
    uv: 3000,
    pv: 6500,
    amt: 2210,
  },
  {
    name: 'Apr',
    uv: 2000,
    pv: 2100,
    amt: 2290,
  },
  {
    name: 'May',
    uv: 3000,
    pv: 6500,
    amt: 2210,
  },
  {
    name: 'June',
    uv: 2000,
    pv: 2100,
    amt: 2290,
  },
  
  {
    name: 'July',
    uv: 3000,
    pv: 6500,
    amt: 2210,
  },
  {
    name: 'Aug',
    uv: 2000,
    pv: 2100,
    amt: 2290,
  }
  
];

const BigLine = () => {
  return (
    <ResponsiveContainer width="100%" height={190}>
      <LineChart width={"100%"} height={300} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        {/* <YAxis /> */}
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#92c6f0" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BigLine;
