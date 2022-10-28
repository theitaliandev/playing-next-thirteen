'use client';

import { useRouter } from "next/navigation"

export default function Breadcumb({children}) {
    const router = useRouter()
    return(
       <button className="-mt-10 mb-4 bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-md" onClick={() => router.back()}>{children}</button>
    )
}