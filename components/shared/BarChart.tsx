"use client"

import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartCustomization = ({data}) => {

  return (
    <BarChart
      width={800}
      height={500}
      data={data}
     
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Completed" fill="#379AE6" activeBar={<Rectangle fill="#379AE6" stroke="#379AE6" />} />
      <Bar dataKey="On-going" fill="#1DD75B" activeBar={<Rectangle fill="#1DD75B" stroke="#1DD75B" />} />
      <Bar dataKey="Not started" fill="#EFB034" activeBar={<Rectangle fill="#EFB034" stroke="#EFB034" />} />
    </BarChart>
  );
}

export default BarChartCustomization


{/* <BarChart
width={800}
height={500}
data={data}
margin={{
  top: 5,
  right: 30,
  left: 20,
  bottom: 5,
}}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey={data.uv} fill="#379AE6" activeBar={<Rectangle fill="#379AE6" stroke="#379AE6" />} />
<Bar dataKey={data.pv} fill="#1DD75B" activeBar={<Rectangle fill="#1DD75B" stroke="#1DD75B" />} />
<Bar dataKey={data.amt} fill="#EFB034" activeBar={<Rectangle fill="#EFB034" stroke="#EFB034" />} />
</BarChart> */}