import Image from "next/image";
import { ArrowDown } from "lucide-react";

import banner from "@/public/banner.png";

export default function Hero() {
    return (
        <section className="px-2 pt-2 sm:px-3 sm:pt-3 rounded-xl mt-6">
            <div className="grid w-full overflow-hidden rounded-xl bg-[#222630] lg:grid-cols-2">
                <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 lg:py-20">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#C2F800]">
                        Workout Library
                    </p>
                    <h1 className="font-display text-2xl font-bold uppercase leading-[1.05] sm:text-4xl lg:text-6xl">
                        Train with intent.{" "}
                        Log every set.
                    </h1>
                    <p className="mt-6 max-w-xl text-base text-[#9CA3AF] sm:text-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a
                        lift, lock it into today&apos;s plan, and watch the
                        week&apos;s work add up.
                    </p>
                    <a
                        href="#library"
                        className="btn text-[#000] bg-[#C2F800] mt-8 w-fit gap-2 rounded-md border-0 font-bold uppercase tracking-wide"
                    >
                        Browse Workouts <ArrowDown size={18} />
                    </a>
                </div>

                <div className="relative min-h-60 sm:min-h-72 lg:min-h-full">
                    <Image
                        src="/banner.png"
                        alt="Workout machine illustration"
                        fill
                        priority
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-contain p-10 sm:p-12 lg:p-16"
                    />
                </div>
            </div>
        </section>
    );
}
