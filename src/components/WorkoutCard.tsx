import type { ReactNode } from "react";
import Link from "next/link";
import type { IWorkout } from "@/src/types/workout.type";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";

export function Pill({ children }: { children: ReactNode }) {
    return (
        <span className="rounded-full border border-accent/40 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-accent">
            {children}
        </span>
    );
}

export function Stats({ w }: { w: IWorkout }) {
    return (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
            <span className="flex items-center gap-1">
                <Clock size={14} className="text-accent" />
                {w.duration} min
            </span>
            <span className="flex items-center gap-1">
                <Flame size={14} className="text-accent" />
                {w.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
                <Star size={14} className="text-accent" />
                {w.rating}
            </span>
        </div>
    );
}

export default function WorkoutCard({ workout: w }: { workout: IWorkout }) {
    return (
        <Link
            href={`/workout/${w.id}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition hover:-translate-y-1 hover:border-accent/60"
        >
            <div className="aspect-[4/3] overflow-hidden bg-surface-2">
                
                <Image
                    src={w.image}
                    alt={w.name}
                    width={400}
                    height={300}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex flex-wrap gap-2">
                    {(w.muscleGroups ?? []).slice(0, 3).map((c) => (
                        <Pill key={c}>{c}</Pill>
                    ))}
                </div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
                    {w.name}
                </h3>
                <p className="text-sm text-muted">{w.equipment}</p>
                <div className="mt-auto border-t border-line pt-3">
                    <Stats w={w} />
                </div>
            </div>
        </Link>
    );
}
