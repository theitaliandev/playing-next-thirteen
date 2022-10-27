'use client'

import Link from "next/link";
import { useSelectedLayoutSegments } from 'next/navigation';

export default function NavItem({category, children}) {
    const selectedLayoutSegments = useSelectedLayoutSegments();
    return(
        <Link className={selectedLayoutSegments[0] === category ? "underline" : ""} href={category}>{children}</Link>
    )
}