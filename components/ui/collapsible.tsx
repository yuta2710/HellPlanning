"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { useState } from "react"
import MenuIcon from '../../public/assets/menu.svg'
import AddIcon from '../../public/assets/add-label.svg'


const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export interface CollapsibleIconProcess {
  initialIcon: React.ReactElement;
  flippedIcon: React.ReactElement;
  headingTitle: string;
  content?: React.ReactElement;
}
const BacklogItem = (props: CollapsibleIconProcess) => {
  const [openBacklogItem, setIsOpenBacklogItem] = useState<boolean>(false);
  return (
    <div className='flex justify-between items-center gap-8 w-full px-8'>
      <Collapsible className='relative flex flex-col w-full justify-between items-start'>
        <div className="relative w-full flex justify-between items-center">
          {/** BACKLOG ITEMS */}
          <div className='flex justify-center items-center gap-8'>
            <CollapsibleTrigger className="relative" onClick={() => setIsOpenBacklogItem(!openBacklogItem)}>
              {openBacklogItem ? props.flippedIcon : props.initialIcon}
            </CollapsibleTrigger>
            <CollapsibleTrigger className='font-semibold' onClick={() => setIsOpenBacklogItem(!openBacklogItem)}>{props.headingTitle}</CollapsibleTrigger>
            <div className='text-gray-500 font-medium text-sm'>106 tasks</div>
          </div>
          {/** ICON */}
          <div className='flex justify-between items-center gap-2'>
            <AddIcon />
            <MenuIcon />
          </div>
        </div>
        <CollapsibleContent className="w-full CollapsibleContent">
          {props.content && props.content}
        </CollapsibleContent>


      </Collapsible>
    </div >

  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent, BacklogItem }


