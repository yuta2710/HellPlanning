"use client"

import React from 'react'
import { Badge } from "@/components/ui/badge"
import { darkenColor } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Skeleton from "@/components/ui/skeleton"

export interface BacklogTaskItemProps {
  _id?: string;
  title: string;
  labels: string[];
  avatars?: string[];
  status?: 'Not Ready' | 'To Do' | 'In Progress' | 'Completed';
  // assignee: string;
}


const BacklogTaskItem = (props: BacklogTaskItemProps) => {
  const bgColor = "#F1F5FE";
  const bgColor2 = "#EEFDF3"
  // const toHex = "#2466EB";
  const steps = 10;
  const calculatedTextColor = darkenColor(bgColor, 0.5);
  console.log(`${calculatedTextColor}`)
  return (
    <div className='w-full flex flex-col justify-between items-center border rounded-sm p-4' style={{
      borderColor: "#DEE1E6"
    }}>
      <div className='flex flex-col justify-center items-start gap-4 w-full'>
        <div className='flex justify-between items-center bg-orange-400-2 w-full'>
          <h2 className='text-[14px] font-medium'>{props.title}</h2>
          <ul className='flex flex-row justify-center items-center gap-4'>
            {props.labels.map((label, index) => {
              return <li key={index}><Badge variant="noneBg" bgcolor={bgColor} textcolor={calculatedTextColor} text={label} /></li>
            })}
          </ul>
        </div>
        <ul className='flex justify-center items-center gap-2'>
          {props.avatars && props.avatars.map((avatar, index) => {
            return (
              <li key={avatar}>
                <Avatar style={{
                  width: 28,
                  height: 28
                }} >
                  <AvatarImage src={avatar} className='object-cover' />
                  <AvatarFallback>
                    <Skeleton className="h-28 w-28 rounded-full" />
                  </AvatarFallback>
                </Avatar>
              </li>
            )
          })}
        </ul>
      </div>

    </div>
  )
}

export default BacklogTaskItem