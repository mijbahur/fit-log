"use client";
import { AppContext } from '@/src/context/AppCotext';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const { addTodayWorkout } = useContext(AppContext);
    console.log("addTodayWorkout in MyPlanPage", addTodayWorkout);
    return (
        <div>
            <h2>My Plan</h2>
        </div>
    );
};

export default MyPlanPage;