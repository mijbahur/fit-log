"use client";
import { useContext, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, Clock, Flame, Star, X, ChevronDown } from "lucide-react";
import { AppContext } from "@/src/context/AppCotext";
import { IWorkout } from "@/src/types/workout.type";

type SortKey = "Duration" | "Calories" | "Rating";

const num = (v: unknown) => parseFloat(String(v ?? 0)) || 0;

const MyPlanPage = () => {
    const {
        addTodayWorkout,
        savedWorkouts,
        removeTodayWorkout,
        removeSavedWorkout,
        markAsDone,
        planTab,
        setPlanTab,
        doneIds = [],
    } = useContext(AppContext);

    const [sortBy, setSortBy] = useState<SortKey>("Duration");
    const [loading, setLoading] = useState(true);
    const tab = planTab;

    // short "Loading workouts…" state before the list renders
    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 400);
        return () => clearTimeout(t);
    }, []);

    const activeWorkouts = tab === "today" ? addTodayWorkout : savedWorkouts;
    const totalMinutes = activeWorkouts.reduce((s: number, w: IWorkout) => s + num(w.duration), 0);
    const totalCalories = activeWorkouts.reduce((s: number, w: IWorkout) => s + num(w.caloriesBurned), 0);

    const list: IWorkout[] = useMemo(() => {
        const base = tab === "today" ? addTodayWorkout : savedWorkouts;
        const key = sortBy.toLowerCase() as "duration" | "caloriesBurned" | "rating";
        return [...base].sort((a: IWorkout, b: IWorkout) =>
            key === "duration" ? num(a[key]) - num(b[key]) : num(b[key]) - num(a[key])
        );
    }, [tab, sortBy, addTodayWorkout, savedWorkouts]);

    const tabClass = (t: "today" | "saved") =>
        `rounded-md px-4 py-1.5 text-sm font-semibold transition ${
            tab === t ? "bg-[#C2F800] text-black" : "text-muted hover:text-white"
        }`;

    return (
        <section className=" container mx-auto max-w-7xl px-4 pt-4 pb-10 sm:px-6 sm:pt-6 ">
            {/* Title */}
            <div className="w-full">
                <h1 className="font-display text-4xl font-bold uppercase">My Plan</h1>
            <p className="mt-1 text-sm text-muted sm:text-base">
                Cap of five lifts for today. Finish them, then load more.
            </p>
            </div>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-3 w-full rounded-xl border border-white/40 bg-[#13161D]">
                {[
                    { label: "Exercises", value: activeWorkouts.length, color: "text-[#C2F800]" },
                    { label: "Minutes", value: totalMinutes },
                    { label: "Calories", value: totalCalories },
                ].map((m) => (
                    <div key={m.label} className="px-2 py-5 text-center sm:py-6">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                            {m.label}
                        </p>
                        <p className={`font-display mt-1 text-3xl font-bold sm:text-4xl ${m.color}`}>
                            {m.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Tabs + sort */}
            <div className="mt-6 w-full flex items-center justify-between gap-3">
                <div className="grid grid-cols-2 gap-2 rounded-lg border border-white/40 bg-[#13161D] p-1">
                    <button className={tabClass("today")} onClick={() => setPlanTab("today")}>
                        Today&apos;s Plan
                    </button>
                    <button className={tabClass("saved")} onClick={() => setPlanTab("saved")}>
                        Saved
                    </button>
                </div>

                <label className="flex items-center gap-2 text-xs text-muted">
                    <span className="hidden sm:inline">Sort By</span>
                    <span className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortKey)}
                            className="appearance-none rounded-md border border-white/40 bg-surface py-1.5 pl-3 pr-8 text-sm font-semibold text-white outline-none"
                        >
                            <option className="bg-surface text-black">Duration</option>
                            <option className="bg-surface text-black">Calories</option>
                            <option className="bg-surface text-black">Rating</option>
                        </select>
                        <ChevronDown size={14} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-white" />
                    </span>
                </label>
            </div>

            {/* List */}
            <div className="mt-4 w-full">
                {loading ? (
                    <div className="flex flex-col items-center gap-3 py-16 text-muted">
                        <span className="loading loading-spinner loading-lg text-[#C2F800]" />
                        <p>Loading workouts…</p>
                    </div>
                ) : list.length === 0 ? (
                    <div className="rounded-xl border border-white/40 bg-surface py-14 text-center">
                        <h2 className="font-display text-2xl font-bold uppercase">Nothing here yet</h2>
                        <p className="mt-2 text-sm text-muted">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link href="/" className="btn text-[#000] bg-[#C2F800] mt-5 border-0 font-semibold uppercase">
                            Go to workouts
                        </Link>
                    </div>
                ) : (
                    <ul className="space-y-3">
                        {list.map((w) => {
                            const done = tab === "today" && doneIds.includes(String(w.id));
                            return (
                                <li
                                    key={w.id}
                                    className={`flex flex-col gap-4 rounded-xl border bg-[#13161D] p-3 sm:flex-row sm:items-center ${
                                        done ? "border-accent/60" : "border-white/40"
                                    }`}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={w.image}
                                        alt={w.name}
                                        className="h-24 w-full rounded-lg bg-surface-2 object-cover sm:h-16 sm:w-24"
                                    />

                                    <div className="flex-1">
                                        <h3 className={`font-display text-lg font-semibold uppercase ${done ? "text-[#C2F800]" : ""}`}>
                                            {w.name}
                                        </h3>
                                        <p className="text-xs text-muted">{w.equipment}</p>
                                        <div className="mt-1.5 flex gap-4 text-xs text-muted">
                                            <span className="flex items-center gap-1"><Clock size={13} className="text-[#C2F800]" />{w.duration} min</span>
                                            <span className="flex items-center gap-1"><Flame size={13} className="text-[#C2F800]" />{w.caloriesBurned} kcal</span>
                                            <span className="flex items-center gap-1"><Star size={13} className="text-[#C2F800]" />{w.rating}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Link
                                            href={`/workout/${w.id}`}
                                            className="btn btn-sm border-white/40 bg-transparent text-white hover:border-[#C2F800] hover:text-[#C2F800]"
                                        >
                                            View Details
                                        </Link>

                                        {tab === "today" && (
                                            <button
                                                onClick={() => markAsDone(w)}
                                                disabled={done}
                                                className="btn btn-sm text-[#000] bg-[#C2F800] gap-1 border-0 disabled:opacity-60"
                                            >
                                                <Check size={14} /> {done ? "Done" : "Mark as Done"}
                                            </button>
                                        )}

                                        <button
                                            aria-label={`Remove ${w.name}`}
                                            onClick={() => (tab === "today" ? removeTodayWorkout(w) : removeSavedWorkout(w))}
                                            className="btn btn-sm btn-square border-white/40 bg-transparent text-white hover:border-red-400 hover:text-red-400"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </section>

    );
};

export default MyPlanPage;