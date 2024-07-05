"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import BarChartCustomization from "../../../components/shared/BarChart"
import PieChartWithCenterLabel from "../../../components/shared/PieChartWithCenterLabel"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataForBarChartCustomizations = [
  {
    name: 'Q1',
    "Completed": 4000,
    "On-going": 8000,
    "Not started": 2400,
  },
  {
    name: 'Q2',
    "Completed": 9000,
    "On-going": 1398,
    "Not started": 2210,
  },
  {
    name: 'Q3',
    "Completed": 2000,
    "On-going": 9800,
    "Not started": 2290,
  },
  {
    name: 'Q4',
    "Completed": 6570,
    "On-going": 8504,
    "Not started": 2000,
  },
];

const dataPieChartCustomization = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <section className='flex flex-col'>
      <div className='flex justify-evenly items-center gap-4 mt-8'>
        <div className='flex flex-col justify-start items-start gap-2 w-[270px] bg-[#F1F5FE] rounded-xl p-8'>
          <div className='flex justify-start items-center gap-4 bg-[#]'>
            <Image src={'/assets/completed.svg'} width={28} height={28} priority alt='' />
            <span className='font-semibold text-[16px]'>Completed tasks</span>
          </div>
          <span className='text-[36px] font-bold'>68</span>
          <span className='text-[11px] text-[#06183C]'>Increased by 6 this week</span>
        </div>

        <div className='flex flex-col justify-start items-start gap-2 w-[270px] bg-[#FEF1F1] rounded-xl p-8'>
          <div className='flex justify-start items-center gap-4 bg-[#]'>
            <Image src={'/assets/incomplete.svg'} width={28} height={28} priority alt='' />
            <span className='font-semibold text-[16px]'>Incomplete tasks</span>
          </div>
          <span className='text-[36px] font-bold'>17</span>
          <span className='text-[11px] text-[#06183C]'>Decreased by 5 this week</span>
        </div>

        <div className='flex flex-col justify-start items-start gap-2 w-[270px] bg-[#F3FDE5] rounded-xl p-8'>
          <div className='flex justify-start items-center gap-4 bg-[#]'>
            <Image src={'/assets/overdue.svg'} width={28} height={28} priority alt='' />
            <span className='font-semibold text-[16px]'>Overdue tasks</span>
          </div>
          <span className='text-[36px] font-bold'>68</span>
          <span className='text-[11px] text-[#06183C]'>Increased by 3 this week</span>
        </div>

        <div className='flex flex-col justify-start items-start gap-2 w-[270px] bg-[#F2FAFD] rounded-xl p-8'>
          <div className='flex justify-start items-center gap-4 bg-[#]'>
            <Image src={'/assets/total.svg'} width={28} height={28} priority alt='' />
            <span className='font-semibold text-[16px]'>Total tasks</span>
          </div>
          <span className='text-[36px] font-bold'>85</span>
          <span className='text-[11px] text-[#06183C]'>Completion rate: 80%</span>
        </div>
      </div>

      <div className='flex flex-col justify-between items-start mt-8 w-full bg-yellow-500-2'>
        <span className='font-bold text-[16px]'>Detailed reports</span>
        <span className='font-regular text-[14px] pt-4'>Tasks by components</span>

        <div className='flex justify-start items-center bg-red-500-2 w-full mt-8 gap-24'>
          <div className='bg-green-500-0'>
            <BarChartCustomization data={dataForBarChartCustomizations} />
          </div>
          <div className='flex flex-col justify-center items-center bg-cyan-500-2'>
            {/* <PieChartWithCenterLabel data={dataPieChartCustomization} /> */}
            <h2 className='font-bold text-[16px] text-center'>Last 30 Days Performance</h2>
            <PieChartWithCenterLabel />
          </div>
          {/* <ResponsiveContainer width="100%" height="100%"> */}

        </div>
      </div>
    </section>
  )
}