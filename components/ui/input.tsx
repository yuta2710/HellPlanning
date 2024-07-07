"use client";

import * as React from "react"

import { cn } from "@/lib/utils"
import SearchIcon from "../../public/assets/search.svg";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width: number;
  height?: number;
  backgroundcolor: string;
  placeholdertemplatestr: string;
  icon?: React.ReactElement
  isflipped?: boolean;
  reststyle?: {
    container?: string;
    icon?: string;
    input?: string;
  }
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    ...props }, ref) => {
    const [input, setInput] = React.useState('');
    
    console.log(props.isflipped)
    return (
      <div className="relative flex items-center">
        {/** ICON */}
        {props.icon && !props.isflipped && <div className={`absolute ${props.reststyle?.icon}`}>{props.icon}</div>}

        {/** INPUT */}
        <input
          style={{
            width: props.width
          }}
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          type={type}
          className={cn(
            `flex h-10 px-3 text-sm ${props.height && `h-[${props.height}px]`} 
            ring-offset-background bg-[#${props.backgroundcolor}] file:border-0 file:bg-transparent file:text-sm 
            file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed 
            disabled:opacity-50 rounded-[6px] ${props.reststyle?.input}`,
            className
          )}
          placeholder={props.placeholdertemplatestr}
          ref={ref}
          {...props}
        />
        {props.icon && props.isflipped && <div className="absolute right-2">{props.icon}</div>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
