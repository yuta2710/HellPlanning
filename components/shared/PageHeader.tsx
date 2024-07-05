import React from 'react'
import { Button } from '../../components/ui/button'
import ChevronIcon from '../../public/assets/chevron.svg'
import ChevronRightIcon from '../../public/assets/chevron-right.svg'
import ProfileIcon from '../../public/assets/profile.svg'
import FilterIcon from '../../public/assets/filter.svg'
import SortAscendingIcon from '../../public/assets/sort-ascending.svg'
import EyeIcon from '../../public/assets/eye.svg'
import MenuIcon from '../../public/assets/menu.svg'
import AddIcon from '../../public/assets/add-label.svg'
import { upperFirst } from "lodash";

export interface PageHeaderProps {
  title: string;
}

const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className='flex justify-between items-center p-8'>
      <div className='flex justify-center items-center'>
        <h2 className='font-bold text-[32px]'>{props.title}</h2>
        <Button reststyle='ml-4' icon={<ChevronIcon />} />
      </div>
      <div className='flex justify-center items-center gap-8'>
        <div className='flex justify-center items-center gap-2'>
          <ProfileIcon />
          <span className='text-sm'>My tickets</span>
        </div>

        <div className='flex justify-center items-center gap-2'>
          <FilterIcon />
          <span className='text-sm'>Filter</span>
        </div>

        <div className='flex justify-center items-center gap-2'>
          <SortAscendingIcon />
          <span className='text-sm'>Sort</span>
        </div>

        <div className='flex justify-center items-center gap-2'>
          <EyeIcon />
          <span className='text-sm'>Views</span>
        </div>

        <div className='flex justify-center items-center gap-2 text-sm'>
          <MenuIcon />
        </div>
      </div>
    </div>
  )
}

export default PageHeader