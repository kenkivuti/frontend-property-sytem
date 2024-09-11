import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  type?: "submit";
  children: React.ReactNode;
  redirectTo?: string;
}
const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type,
  redirectTo,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (redirectTo) navigate(redirectTo); 
  };

  return (
    <button onClick={handleClick} className={className} type={type}>
      {children}
    </button>
  );
};
export default Button;
