"use client";

import React from 'react'
import Sidebar from '@/components/shared/Sidebar'
import Header from '@/components/shared/Header'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import PageHeader from "@/components/shared/PageHeader"
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
    <div className=''>
      <PageHeader title={pathname !== "/" ? upperFirst(pathname.split("/")[1]) : "Backlogs"} />
      {children}
    </div>
  )
}

export default Layout