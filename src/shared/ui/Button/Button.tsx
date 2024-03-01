import cn from 'classnames';
import React from 'react'

interface IButton {
  className?: string;
  label: string;
}

export default function Button({ className, label, ...rest }: IButton) {
  return (
    <button 
      className={cn(className, 'border-none outline-none')}
      {...rest}
    >
      {label}
    </button>
  )
}
