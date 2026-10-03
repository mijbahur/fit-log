"use client";

import React, { createContext, ReactNode, useState } from "react";

import { IWorkout } from "@/src/types/workout.type";

interface AppContextType {
    addTodayWorkout: IWorkout[];
    setAddTodayWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    savedWorkouts: IWorkout[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    doneIds: string[];
    removeTodayWorkout: (w: IWorkout) => void;
    removeSavedWorkout: (w: IWorkout) => void;
    markAsDone: (w: IWorkout) => void;
}

export const AppContext = createContext<AppContextType>({
    addTodayWorkout: [],
    setAddTodayWorkout: () => {},
    savedWorkouts: [],
    setSavedWorkouts: () => {},
    doneIds: [],
    removeTodayWorkout: () => {},
    removeSavedWorkout: () => {},
    markAsDone: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [addTodayWorkout, setAddTodayWorkout] = useState<IWorkout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);
    const [doneIds, setDoneIds] = useState<string[]>([]);

     const removeTodayWorkout = (w: IWorkout) => {
        setAddTodayWorkout((prev) => prev.filter((x) => x.id !== w.id));
        setDoneIds((prev) => prev.filter((id) => String(id) !== String(w.id)));
    };

    const removeSavedWorkout = (w: IWorkout) => {
        setSavedWorkouts((prev) => prev.filter((x) => x.id !== w.id));
    };

    const markAsDone = (w: IWorkout) => {
        setDoneIds((prev) => (String(prev.includes(w.id)) ? prev : [...prev, w.id]));
    };

    return (
        <AppContext.Provider
            value={{
                addTodayWorkout,
                setAddTodayWorkout,
                savedWorkouts,
                setSavedWorkouts,
                doneIds,
                removeTodayWorkout,
                removeSavedWorkout,
                markAsDone,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
