'use client';

import { useAppSelector } from "@/app/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoCafeOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
    const count = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap items-center justify-center p-2">
        <SimpleWidget
            title={`${count}`}
            subTitle="Productos agragados"
            label="Contador"
            icon={<IoCafeOutline size={50} className="text-blue-500" />} 
            href="/dashboard/counter"           
        />
    </div>
  )
}
