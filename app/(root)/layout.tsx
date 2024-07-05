"use client";

import React from 'react'
import Sidebar from '@/components/shared/Sidebar'
import Header from '@/components/shared/Header'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import ChevronIcon from '../../public/assets/chevron.svg'
import ChevronRightIcon from '../../public/assets/chevron-right.svg'
import ProfileIcon from '../../public/assets/profile.svg'
import FilterIcon from '../../public/assets/filter.svg'
import SortAscendingIcon from '../../public/assets/sort-ascending.svg'
import EyeIcon from '../../public/assets/eye.svg'
import MenuIcon from '../../public/assets/menu.svg'
import AddIcon from '../../public/assets/add-label.svg'
import { usePathname } from 'next/navigation'
import { upperFirst } from "lodash";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className='root'>
      <Sidebar />
      <div className='root-container'>
        <Header />
        <div className='wrapper'>
          <div className='flex justify-between items-center p-8'>
            <div className='flex justify-center items-center'>
              <h2 className='font-bold text-[32px]'>{pathname !== "/" ? upperFirst(pathname.split("/")[1]) : "Backlogs"}</h2>
              <Button reststyle='ml-4' icon={<ChevronIcon />} />
            </div>
            <div className='flex justify-center items-center gap-8'>
              <div className='flex justify-center items-center gap-2'>
                <ProfileIcon />
                <span className=''>My tickets</span>
              </div>

              <div className='flex justify-center items-center gap-2'>
                <FilterIcon />
                <span className=''>Filter</span>
              </div>

              <div className='flex justify-center items-center gap-2'>
                <SortAscendingIcon />
                <span className=''>Sort</span>
              </div>

              <div className='flex justify-center items-center gap-2'>
                <EyeIcon />
                <span className=''>Views</span>
              </div>

              <div className='flex justify-center items-center gap-2'>
                <MenuIcon />
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout