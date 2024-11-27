/* eslint-disable react/prop-types */

import { cn } from "../utiles";

const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "font-bold font-Bebas Neue py-[10px] px-[24px] text-[#f4f5f7] bg-primary rounded-md opacity-90 transition-all delay-150 hover:opacity-100   text-[16px] ",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;