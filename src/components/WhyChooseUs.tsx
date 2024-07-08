import React from 'react'
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";
function WhyChooseUs() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Let Scroll it with Us <br /> Mohd Ajlal
          </span>
        }
        badge={
          <Link href="https://instagram.com/mohd_ajlal">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  )
}

const Badge = ({ className }: { className?: string }) => {
    return (
        <div
            className={`bg-gradient-to-br from-[#FDCB92] to-[#F9A826] rounded-full p-1 ${className}`}
        >
            <p 
            className='text-[#0B0B0F] font-bold text-lg text-center'
            >A</p>
        </div>
    );
  };

export default WhyChooseUs