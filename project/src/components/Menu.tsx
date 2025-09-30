import Link from "next/link";
import {PAGES} from "@/config/pages.config";

export default function Menu() {
    return (
        <nav className="flex gap-6 text-white/80">
            <Link href={PAGES.HOME}>Home</Link>
            <Link href={PAGES.EXPLORE}>Explore</Link>
            <Link href={PAGES.PROFILE_FAKE}>Profile</Link>
        </nav>
    );
}