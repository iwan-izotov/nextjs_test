
import type {PropsWithChildren} from "react";
import {Header} from "@/components/Header";

export default function Layout({children}: PropsWithChildren) {
    return (
        <div className="min-h-screen w-full">
            <Header/>
            <div className="flex justify-center px-4 py-8">
                <div className="w-xl">
                    {children}
                </div>
            </div>
        </div>
    );
}