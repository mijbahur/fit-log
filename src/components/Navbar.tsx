"use client";

import React, { useContext } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppContext } from "@/src/context/AppCotext";

const Navbar = () => {
    const pathname = usePathname();
    const { addTodayWorkout, savedWorkouts, setPlanTab } = useContext(AppContext);
    const workoutsActive = pathname === "/" || pathname.startsWith("/workout/");
    const myPlanActive = pathname === "/my-plan" || pathname.startsWith("/my-plan/");

    const links = (
        <>
            <li>
                <Link
                    href="/"
                    aria-current={workoutsActive ? "page" : undefined}
                    className={workoutsActive ? "font-semibold text-[#C2F800]" : "hover:text-[#C2F800]"}
                >
                    Workouts
                </Link>
            </li>
            <li>
                <Link
                    href="/my-plan"
                    aria-current={myPlanActive ? "page" : undefined}
                    className={myPlanActive ? "font-semibold text-[#C2F800]" : "hover:text-[#C2F800]"}
                >
                    My Plan
                </Link>
            </li>
        </>
    );
    return (
        <nav className="bg-black border-b border-base-300">
            <div className="navbar container mx-auto px-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <Image src={logo} alt="Logo" width={24} height={24} />

                        <Link href="/" className="btn btn-ghost text-xl">
                            FITLOG
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end gap-5">
                    {/* <a className="btn">Button</a> */}
                    <Link href="/my-plan" onClick={() => setPlanTab("today")}>
                        My Plan 
                        <span className="ml-1 rounded-full bg-[#C2F800] text-black px-2 py-0.5 text-xs">
                            {addTodayWorkout.length}
                        </span>
                    </Link>
                    <Link href="/my-plan" onClick={() => setPlanTab("saved")}>
                        Saved
                        <span className="ml-1 rounded-full bg-white/10 px-2 py-0.5 text-xs">
                            {savedWorkouts.length}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
