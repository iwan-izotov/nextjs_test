import Image from "next/image";
import Tweet from "@/app/(home)/Tweet";

export default function Home() {
  return (
      <div className="min-h-screen flex justify-center px-4 py-8">
          <div className="w-full max-w-xl">
              <h1 className="text-3xl font-bold mb-6">
                  Home
              </h1>
              <Tweet
                  tweet={{
                      author: "redgroup",
                      text: "Hello",
                  }}
              />
          </div>
      </div>
  );
}
