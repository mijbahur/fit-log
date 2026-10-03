"use client";

import { Plus } from "lucide-react";
import React, { useContext } from "react";
import { IWorkout } from "@/src/types/workout.type";
import { AppContext } from "@/src/context/AppCotext";




const AddToTodaysPlanButton = ( { workout }: { workout: IWorkout } ) => {

    const { addTodayWorkout, setAddTodayWorkout } = useContext(AppContext);

    console.log("addTodayWorkout", addTodayWorkout);

    const handleAddToTodaysPlan = (workout: IWorkout) => {
        // Implement the logic to add the workout to today's plan
        console.log("Adding workout to today's plan:", workout);

        setAddTodayWorkout((prevWorkouts: IWorkout[]) => [...prevWorkouts, workout]);
    }
    return (
        <button className="btn text-[#000] bg-[#C2F800] flex-1 gap-2 border-0 rounded-lg font-bold uppercase hover:bg-black hover:text-white hover:border hover:border-[#C2F800] disabled:opacity-50"
        onClick = {() => handleAddToTodaysPlan(workout)}>
            <Plus size={18} /> Add to today&apos;s plan
        </button>
    );
};

export default AddToTodaysPlanButton;
