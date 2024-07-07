"use client";

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from '../ui/separator';
import SearchIcon from "../../public/assets/search.svg";
import AddLabelIcon from "../../public/assets/add-label.svg";

const Header = () => {
  const [querySearch, setQuerySearch] = useState('');
  return (
    <header className='w-full h-[72px] bg-red-500-2'>
      <div className='p-4 flex items-center flex-row justify-between bg-yellow-500-2'>
        <Input width={350} backgroundcolor={'F3F4F6'} placeholdertemplatestr='Search' icon={<SearchIcon />} reststyle={{
          input: 'pl-16',
          icon: "ml-8"
        }} />
        <ul className='flex justify-between items-center mr-4 gap-8'>
          <li><Button reststyle={{
            container: 'px-4 py-2 rounded-[6px] text-sm hover:scale-[1.05] transition-all',
            
          }} bgcolor='115467' text={{ color: 'fff', content: '+ Add Task' }} /></li>
          <li><Image src={'/assets/question.svg'} width={36} height={36} alt='Question' /></li>
          <li><Image src={'/assets/bell.svg'} width={36} height={36} alt='Bell' /></li>
          <li>
            <Avatar>
              <AvatarImage src={`/assets/avatar.jpg`} className='object-cover' />
              <AvatarFallback>Mie</AvatarFallback>
            </Avatar>
          </li>
        </ul>
      </div>
      <Separator className='' />
    </header>
  )
}

export default Header