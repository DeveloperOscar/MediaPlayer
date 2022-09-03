import { ReactNode } from "react";

interface Props{
  children: ReactNode 
  className?: string
}

const CardContainer =  ({children, className }: Props) => {
  return (
    <div className={`flex flex-col bg-neutral2 rounded-lg outline outline-[6px] outline-primary  drop-shadow-[0_12px_35px_#313d4f] ${className}`}>
      {children} 
    </div>
  )
}

export default CardContainer;
