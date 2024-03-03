import React from 'react';
import cn from 'classnames';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<IButtonProps> = ({ className, label, ...rest }) => {
  return (
    <button 
      className={cn(className, 'border-none outline-none')}
      {...rest}
    >
      {label}
    </button>
  );
}

export default Button;

