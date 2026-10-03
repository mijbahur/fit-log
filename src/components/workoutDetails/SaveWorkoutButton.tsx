"use client";
        
import { Bookmark } from "lucide-react";
import React, { useContext } from "react";
import { IWorkout } from "@/src/types/workout.type";
import { AppContext } from "@/src/context/AppCotext";
import { toast } from "react-toastify";




const SaveWorkoutButton = ( { workout }: { workout: IWorkout } ) => {

    const { savedWorkouts, setSavedWorkouts } = useContext(AppContext);

    console.log("savedWorkouts", savedWorkouts);

    const handleSaveWorkout = (workout: IWorkout) => {
        console.log("Saving workout:", workout);

        setSavedWorkouts((prevWorkouts: IWorkout[]) => [...prevWorkouts, workout]);
        toast.success("Workout saved!",{
            position: "top-right",
            autoClose: 3000,
        });
    }
    return (
        <button className="btn flex-1 gap-2 border-line rounded-lg bg-transparent font-bold uppercase text-white hover:border-[#C2F800] disabled:opacity-50"
        onClick = {() => handleSaveWorkout(workout)}>
            <Bookmark size={18} /> Save workout
        </button>
    );
};

export default SaveWorkoutButton;
