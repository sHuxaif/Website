"use client";
import React, { useState } from "react";
import {Menu, MenuItem,HoveredLink, ProductItem} from './ui/navbar-menu'
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
     className={cn(" top-10 inset-x-0 max-w-2xl mx-auto z-30", className)}>
      <Menu setActive={setActive}>
            <Link href={'/'}>
                <MenuItem setActive={setActive} active={active} item="Home"/>
            </Link>
            <Link href = {'/contact'}>
            <MenuItem setActive={setActive} active={active} item="Contact Us"/>
            </Link>
            <Link href={'/about'}>
            <MenuItem setActive={setActive} active={active} item="About Us"/>
            </Link>
      </Menu>
    </div>
  )
}

export default Navbar