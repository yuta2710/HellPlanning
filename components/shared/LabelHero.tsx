import React from 'react'

export interface LabelHeroType {
  bgColor: string;
  color: string;
  content: string;
}

const LabelHero = (props: LabelHeroType) => {
  return (
    <div className="bg-[#FDF2F2] text-[#FF0000] rounded px-2 py-1 text-xs">
      {props.content}
    </div>
  )
}

export default LabelHero