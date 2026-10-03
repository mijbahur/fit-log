"use client";

import React, { createContext, ReactNode, useState } from "react";

import { IWorkout } from "@/src/types/workout.type";
import { toast } from "react-toastify";

interface AppContextType {
    addTodayWorkout: IWorkout[];
    addWorkoutToToday: (w: IWorkout) => void;
    savedWorkouts: IWorkout[];
    saveWorkout: (w: IWorkout) => void;
    doneIds: string[];
    removeTodayWorkout: (w: IWorkout) => void;
    removeSavedWorkout: (w: IWorkout) => void;
    markAsDone: (w: IWorkout) => void;
}

export const AppContext = createContext<AppContextType>({
    addTodayWorkout: [],
    addWorkoutToToday: () => {},
    savedWorkouts: [],
    saveWorkout: () => {},
    doneIds: [],
    removeTodayWorkout: () => {},
    removeSavedWorkout: () => {},
    markAsDone: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [addTodayWorkout, setAddTodayWorkout] = useState<IWorkout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);
    const [doneIds, setDoneIds] = useState<string[]>([]);

    const addWorkoutToToday = (w: IWorkout) => {
        if (addTodayWorkout.some((workout) => workout.id === w.id)) {
            toast.info(`${w.name} is already in today's plan.`, {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        setAddTodayWorkout((prev) =>
            prev.some((workout) => workout.id === w.id) ? prev : [...prev, w],
        );
        toast.success(`${w.name} added to today's plan!`, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    const removeTodayWorkout = (w: IWorkout) => {
        setAddTodayWorkout((prev) => prev.filter((x) => x.id !== w.id));
        setDoneIds((prev) => prev.filter((id) => String(id) !== String(w.id)));
        toast.info(`${w.name} removed from today's plan.`, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    const removeSavedWorkout = (w: IWorkout) => {
        setSavedWorkouts((prev) => prev.filter((x) => x.id !== w.id));
        toast.info(`${w.name} removed from saved workouts.`, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    const saveWorkout = (w: IWorkout) => {
        if (savedWorkouts.some((workout) => workout.id === w.id)) {
            toast.info(`${w.name} is already saved.`, {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        setSavedWorkouts((prev) =>
            prev.some((workout) => workout.id === w.id) ? prev : [...prev, w],
        );
        toast.success(`${w.name} saved!`, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    const markAsDone = (w: IWorkout) => {
        const id = String(w.id);
        if (doneIds.includes(id)) {
            return;
        }

        setDoneIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
        toast.success(`${w.name} marked as done!`, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    return (
        <AppContext.Provider
            value={{
                addTodayWorkout,
                addWorkoutToToday,
                savedWorkouts,
                saveWorkout,
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
