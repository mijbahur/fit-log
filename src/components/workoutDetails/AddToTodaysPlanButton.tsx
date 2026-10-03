"use client";

import { Plus } from "lucide-react";
import React, { useContext } from "react";
import { IWorkout } from "@/src/types/workout.type";
import { AppContext } from "@/src/context/AppCotext";
import { toast } from "react-toastify";




const AddToTodaysPlanButton = ( { workout }: { workout: IWorkout } ) => {

    const { addTodayWorkout, setAddTodayWorkout } = useContext(AppContext);

    console.log("addTodayWorkout", addTodayWorkout);

    const handleAddToTodaysPlan = (workout: IWorkout) => {
        setAddTodayWorkout((prevWorkouts: IWorkout[]) => [...prevWorkouts, workout]);
        toast.success(`${workout.name} added to today's plan!`,{
            position: "top-right",
            autoClose: 3000,
        });
    }
    return (
        <button className="btn text-[#000] bg-[#C2F800] flex-1 gap-2 border-0 rounded-lg font-bold uppercase hover:bg-black hover:text-white hover:border hover:border-[#C2F800] disabled:opacity-50"
        onClick = {() => handleAddToTodaysPlan(workout)}>
            <Plus size={18} /> Add to today&apos;s plan
        </button>
    );
};

export default AddToTodaysPlanButton;
