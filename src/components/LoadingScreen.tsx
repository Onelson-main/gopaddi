"use client"

import { useStore } from "@/lib/store"

export default function LoadingScreen() {
    const { isLoading } = useStore()
    if (isLoading) {
        return (
            <div className="fixed h-full w-full z-[101] left-0 top-0 flex justify-center items-center bg-[#000000E6]">
                < div className="border-8 border-gray-300 border-t-ACCENT rounded-full h-16 w-16 animate-spin" ></ div>
            </div >
        )
    } else {
        null
    }

}