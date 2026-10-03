"use client";

import { Plus } from "lucide-react";
import React, { useContext } from "react";
import { IWorkout } from "@/src/types/workout.type";
import { AppContext } from "@/src/context/AppCotext";


const AddToTodaysPlanButton = ( { workout }: { workout: IWorkout } ) => {

    const { addTodayWorkout, addWorkoutToToday } = useContext(AppContext);
    const alreadyAdded = addTodayWorkout.some((plannedWorkout) => plannedWorkout.id === workout.id);

    return (
        <button
            className="btn text-[#000] bg-[#C2F800] flex-1 gap-2 border-0 rounded-lg font-bold uppercase hover:bg-black hover:text-white hover:border hover:border-[#C2F800] disabled:opacity-50"
            onClick={() => addWorkoutToToday(workout)}
            disabled={alreadyAdded}
        >
            <Plus size={18} /> {alreadyAdded ? "Already in today's plan" : "Add to today's plan"}
        </button>
    );
};

export default AddToTodaysPlanButton;
