import { Bookmark } from "lucide-react";
import React from "react";

const SaveWorkoutButton = () => {
    return (
        <button className="btn flex-1 gap-2 border-line rounded-lg bg-transparent font-bold uppercase text-white hover:border-[#C2F800] disabled:opacity-50">
            <Bookmark size={18} /> Save workout
        </button>
    );
};

export default SaveWorkoutButton;
