"use client";

import { Bookmark } from "lucide-react";
import React, { useContext } from "react";
import { IWorkout } from "@/src/types/workout.type";
import { AppContext } from "@/src/context/AppCotext";

const SaveWorkoutButton = ( { workout }: { workout: IWorkout } ) => {
    const { savedWorkouts, saveWorkout } = useContext(AppContext);
    const alreadySaved = savedWorkouts.some((savedWorkout) => savedWorkout.id === workout.id);

    return (
        <button
            className="btn flex-1 gap-2 border-line rounded-lg bg-transparent font-bold uppercase text-white hover:border-[#C2F800] disabled:opacity-50"
            onClick={() => saveWorkout(workout)}
            disabled={alreadySaved}
        >
            <Bookmark size={18} /> {alreadySaved ? "Already saved" : "Save workout"}
        </button>
    );
};

export default SaveWorkoutButton;
