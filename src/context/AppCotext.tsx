"use client";

import React, { createContext, ReactNode, useState } from "react";

import { IWorkout } from "@/src/types/workout.type";

interface AppContextType {
    addTodayWorkout: IWorkout[];
    setAddTodayWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    savedWorkouts: IWorkout[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const AppContext = createContext<AppContextType>({
    addTodayWorkout: [],
    setAddTodayWorkout: () => {},
    savedWorkouts: [],
    setSavedWorkouts: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [addTodayWorkout, setAddTodayWorkout] = useState<IWorkout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);

    return (
        <AppContext.Provider
            value={{
                addTodayWorkout,
                setAddTodayWorkout,
                savedWorkouts,
                setSavedWorkouts,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
