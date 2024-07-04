import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import ChevronIcon from '../../public/assets/chevron.svg'
import ChevronRightIcon from '../../public/assets/chevron-right.svg'
import ProfileIcon from '../../public/assets/profile.svg'
import FilterIcon from '../../public/assets/filter.svg'
import SortAscendingIcon from '../../public/assets/sort-ascending.svg'
import EyeIcon from '../../public/assets/eye.svg'
import MenuIcon from '../../public/assets/menu.svg'
import AddIcon from '../../public/assets/add-label.svg'

import {
  BacklogItem,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import BacklogTaskItem from "@/components/shared/BacklogTaskItem"

const mockAvatars: string[] = [
  'https://ywdslchnzrooawwvvdzw.supabase.co/storage/v1/object/public/My%20darling/IMG_7807.jpg',
  'https://ywdslchnzrooawwvvdzw.supabase.co/storage/v1/object/public/My%20darling/IMG_7809.jpg',
  'https://ywdslchnzrooawwvvdzw.supabase.co/storage/v1/object/public/My%20darling/IMG_7810.jpg',
  'https://ywdslchnzrooawwvvdzw.supabase.co/storage/v1/object/public/My%20darling/IMG_7811.png',
]
export default function Page() {
  return (
    <div className='w-full min-h-screen'>
      {/* <div className='flex justify-between items-center p-8'>
        <div className='flex justify-center items-center'>
          <h2 className='font-bold text-[32px]'>Backlogs</h2>
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
      </div> */}

      <div className='relative flex flex-col justify-center items-start gap-8 w-full bg-cyan-500-2 pb-8'>
        <BacklogItem
          initialIcon={<ChevronRightIcon />}
          flippedIcon={<ChevronIcon />}
          headingTitle='Not Ready'
          content={(
            <div className='mt-4 transition-all'>
              <BacklogTaskItem title='Design Homepage Layout' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />
              <BacklogTaskItem title='Implement User Authentication' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />
              <BacklogTaskItem title='Create Database Schema' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />
              <BacklogTaskItem title='Develop API Endpoints' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />
              <BacklogTaskItem title='Write Unit Tests for Backend' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />
              <BacklogTaskItem title='Style User Dashboard' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />

            </div>
          )}
        />

        <BacklogItem
          initialIcon={<ChevronRightIcon />}
          flippedIcon={<ChevronIcon />}
          headingTitle='To Do'
          content={(
            <div className='mt-4 transition-all'>
              <BacklogTaskItem title='Optimize Application Performance' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />
              <BacklogTaskItem title='Conduct Usability Testing' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />
              <BacklogTaskItem title='Fix Login Bug' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />
            </div>
          )}
        />

        <BacklogItem
          initialIcon={<ChevronRightIcon />}
          flippedIcon={<ChevronIcon />}
          headingTitle='In Progress'
          content={(
            <div className='mt-4 transition-all'>
              <BacklogTaskItem title='Update Documentation' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />
              <BacklogTaskItem title='Set Up Continuous Integration' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />
              <BacklogTaskItem title='Create Landing Page Content' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />
              <BacklogTaskItem title='Integrate Payment Gateway' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />
            </div>
          )}
        />

        <BacklogItem
          initialIcon={<ChevronRightIcon />}
          flippedIcon={<ChevronIcon />}
          headingTitle='Completed'
          content={(
            <div className='mt-4 transition-all'>
              <BacklogTaskItem title='Refactor Codebase' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />
              <BacklogTaskItem title='Plan Marketing Campaign' labels={['Gojo', 'Yuta']} avatars={mockAvatars} />

            </div>
          )}
        />
      </div>

    </div>
  )
}
