import Explore from "@/app/(public)/explore/Explore";
import {Suspense} from "react";

export default function ExplorePage() {
    return (
        <div>
            <Suspense>
                <Explore />
            </Suspense>
        </div>
    );
}