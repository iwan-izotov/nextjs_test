import type {ITweet} from "@/shared/types/tweet.interface";
import Image from "next/image";

interface Props {
    tweet: ITweet
}

export default function Tweet({tweet}: Props) {
    return (
        <div className="border border-white/10 rounded-xl p-4 bg-black text-white shadow-md">
            <div className="flex item-center gap-3 mb-2">
                <Image
                    src="/x-logo.svg"
                    alt="X logo"
                    width={24}
                    height={24}
                />
                <span className="font-semibold">@{tweet.author}</span>
            </div>
            <p className="text-white/90">{tweet.text}</p>
        </div>
    );
}