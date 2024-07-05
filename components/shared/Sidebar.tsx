"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { navLinks } from '../../constants';
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';

const Sidebar = () => {
  const pName = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/" className='flex justify-start items-start p-5'>
        <Image src="/assets/logo.svg" width={50} height={50} alt="logo" />
        <div className='flex flex-col justify-center items-start'>
          <span className="ml-3 font-bold">HellPlanning</span>
          <span className="ml-3 text-sm text-[#565D6D]">Category</span>
        </div>
      </Link>
      <div className='flex flex-col justify-start items-start h-screen w-full'>
        <nav className="sidebar-nav w-full">
          <ul className="sidebar-nav_elements">
            {navLinks.map((link) => {
              return (
                <li key={link.route} className={link.route === pName ? 'sidebar-nav_elements_active' : ''}>
                  <Link href={link.route} className='w-full flex justify-between items-center'>
                    <div className='flex items-center'>
                      <Image src={link.icon} width={24} height={24} alt={link.label} className="icon" />
                      <span className="ml-3 text-sm font-medium">{link.label}</span>
                    </div>
                    <div className='relative bg-[#115467] rounded-full text-white px-[0.4rem] py-[0.05rem] text-center text-[0.8rem]'>8</div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Separator className='mt-2' />
          <div className='flex justify-between items-center p-4'>
            <h2 className='text-sm font-semibold'>Label</h2>
            <Button
              variant={'noneBg'}
              icon={<Image src={'/assets/add-label.svg'} alt='' width={24} height={24} />}
              onClick={() => console.log("Pressed")}
            />
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
