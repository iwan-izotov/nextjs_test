import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";

export function Header() {
    return (
        <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between bg-black">
            <Link
                href="/"
                className="flex items-center gap-3"
            >
                <Image
                    src="/x-logo.svg"
                    alt="X logo"
                    width={28}
                    height={28}
                    priority
                />
            </Link>

           <Menu />

        </header>
    );
}