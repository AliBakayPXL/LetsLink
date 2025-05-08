import { ReactNode } from "react";

interface BlueCircleProps {
  children: ReactNode;
  className?: string;
}

const BlueCircle = ({ children, className = "" }: BlueCircleProps) => (
  <span
    className={
      "bg-[#053242] rounded-full  w-12 h-12 mr-3 inline-flex items-center justify-center " +
      className
    }
  >
    {children}
  </span>
);

export default BlueCircle;
