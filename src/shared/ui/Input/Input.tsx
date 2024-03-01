import cn from 'classnames';
import React from 'react'

interface IInput {
  className?: string;
}

export default function Input({ className, ...rest }: IInput) {
  return (
    <input 
      className={cn(className, 'bg-transparent border-none outline-none')} 
      {...rest} 
    />
  )
}
