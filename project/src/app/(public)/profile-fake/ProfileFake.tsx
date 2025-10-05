'use client'

import {useRouter} from "next/navigation";
import {PAGES} from "@/config/pages.config";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'ProfileFake'
}

export default function ProfileFake() {
    const router = useRouter();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Profile
            </h1>
            <button onClick={() => router.push(PAGES.HOME)}>Go to home</button>
        </div>
    );
}