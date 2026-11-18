"use client";

import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Link from "next/link";


export default function Header(){
    return  <>
     <div className="flex justify-evenly bg-gray-100 px-4 py-5 ">

        <img src="globe.svg" alt="" className="size-12" />
        <h2     className="text-2xl font-bold block:text-red-200 text-black"> Mansoor sabir</h2>
    <nav className="flex  gap-x-8 items-center" >
    <Link href="" className="font-semibold text-xl font-sans ">Home</Link>
                <Link href="" className="font-semibold text-xl font-sans">Hero</Link>
                <Link href="" className="font-semibold text-xl font-sans">About</Link>
                <Link href="" className="font-semibold text-xl font-sans">Service</Link>
                <Link href="" className="font-semibold text-xl font-sans">Blog</Link>
                <Link href="" className="font-semibold text-xl font-sans">technologies</Link>



    </nav>
        
    </div>
    </>
}