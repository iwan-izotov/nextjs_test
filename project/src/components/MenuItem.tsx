import Link from "next/link";
import {IMenuItem} from "@/components/menu.data";

interface Props {
    item: IMenuItem,
    isActive: boolean
}

export default function MenuItem({item, isActive}: Props) {
    return (
        <Link
            className={isActive ? "text-white" : "text-white/80"}
            href={item.href}
        >
            {item.name}
        </Link>
    );
}