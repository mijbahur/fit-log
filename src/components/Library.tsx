import React from "react";
import WorkoutCard from "./WorkoutCard";
import { IWorkout } from "../types/workout.type";

const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return await res.json();
};

const Library = async () => {
    const workouts = await getWorkouts();

    return (
        <section
            id="library"
            className="container mx-auto max-w-10xl px-2 pt-2 sm:px-3 sm:pt-3 rounded-xl mt-6"
        >
            <div>
                <h3 className="font-display text-sm font-bold uppercase leading-[1.05] sm:text-4xl lg:text-4xl">
                    THE LIBRARY
                </h3>
                <p className="max-w-xl text-base text-[#9CA3AF] sm:text-lg">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                {workouts.map((workout: IWorkout, index: number) => {
                    return <WorkoutCard key={index} workout={workout} />;
                })}
            </div>
        </section>
    );
};

export default Library;
