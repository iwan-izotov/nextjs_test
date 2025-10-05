'use client'

import {usePathname} from "next/navigation";
import type {IMenuItem} from "@/components/menu.data";
import {MENU} from "@/components/menu.data";
import MenuItem from "@/components/MenuItem";
import {match} from "path-to-regexp";

export default function Menu() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-6 text-white/80">
            {
                MENU.map((item: IMenuItem) => (
                    <MenuItem key={item.name} item={item} isActive={!!match(item.href)(pathname)} />
                ))
            }
        </nav>
    );
}