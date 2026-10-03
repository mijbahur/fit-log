import AddToTodaysPlanButton from "@/src/components/workoutDetails/AddToTodaysPlanButton";
import SaveWorkoutButton from "@/src/components/workoutDetails/SaveWorkoutButton";
import { IWorkout } from "@/src/types/workout.type";
import { ArrowLeft} from "lucide-react";

import Link from "next/link";
import React from "react";

interface WorkoutDetailPageProps {
    params: Promise<{ id: string }>;
}

const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return await res.json();
};


const WorkoutDetailPage = async ({ params }: WorkoutDetailPageProps) => {
    const { id } = await params;
    const workouts = await getWorkouts();
    const workout = workouts.find((w: IWorkout) => Number(w.id) === Number(id));

    if (!workout) {
        return (
            <section className="container mx-auto max-w-7xl px-4 py-8">
                <h1 className="text-2xl font-bold">Workout not found</h1>

                <Link
                    href="/"
                    className="mt-4 inline-block text-accent"
                >
                    Back to library
                </Link>
            </section>
        );
    }

    const specs: [string, string | number][] = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout .rating],
  ];
    return (
        <section className="container mx-auto max-w-7xl px-4 py-8 sm:px-6">
            <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
            >
                <ArrowLeft size={16} /> Back to library Back to library
            </Link>
                
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:sticky lg:top-24 lg:self-start">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={workout.image}
                        alt={workout.name}
                        className="aspect-square w-full rounded-2xl border border-line bg-surface-2 object-cover"
                    />
                </div>

                <div>
                    <h1 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
                        {workout.name}
                    </h1>
                    {workout.description && (
                        <p className="mt-3 text-muted">{workout.description}</p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((c: string) => (
                            <span key={c} className="bg-[#C2F800] text-black text-xs font-bold px-3 py-1 rounded-full">
                                {c}
                            </span>
                        ))}
                    </div>
                    
                    <dl className="mt-3 divide-y divide-line rounded-xl border border-line bg-surface">
                        {specs.map(([k, v]) => (
                            <div
                                key={k}
                                className="flex justify-between px-4 py-3 text-sm"
                            >
                                <dt className="font-semibold uppercase tracking-wide text-muted">
                                    {k}
                                </dt>
                                <dd className="text-right font-semibold">
                                    {v}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    {workout.instructions.length > 0 && (
                        <>
                            <h2 className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#C2F800]">
                                Instructions
                            </h2>
                            <ol className="mt-3 space-y-3">
                                {workout.instructions.map((s: string, i: number) => (
                                    <li key={i} className="flex gap-3 text-sm">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C2F800] text-xs font-bold text-black">
                                            {i + 1}
                                        </span>
                                        <span className="text-white/85">
                                            {s}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </>
                    )}

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <AddToTodaysPlanButton workout={workout} />
                        <SaveWorkoutButton workout={workout} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkoutDetailPage;
