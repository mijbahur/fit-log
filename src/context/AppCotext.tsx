"use client";

import React, { createContext, ReactNode, useState } from 'react';


export const AppContext = createContext({});

const AppProvider = ({ children }: {children: ReactNode}) => {
    const [addTodayWorkout, setAddTodayWorkout] = useState([]);
    const [savedWorkouts, setSavedWorkouts] = useState([]);

    const sharedData = {
        addTodayWorkout,
        setAddTodayWorkout,
        savedWorkouts,
        setSavedWorkouts
    };
    return <AppContext.Provider value={sharedData}> {children} </AppContext.Provider>;
}; 

export default AppProvider; 