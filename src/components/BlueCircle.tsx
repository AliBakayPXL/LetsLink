import { ReactNode } from "react";

interface BlueCircleProps {
  children: ReactNode;
  className?: string;
}

const BlueCircle = ({ children, className = "" }: BlueCircleProps) => (
  <span
    className={
      "bg-[#053242] rounded-full p-3 mr-4 inline-flex items-center justify-center " +
      className
    }
  >
    {children}
  </span>
);

export default BlueCircle;
