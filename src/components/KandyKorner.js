import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"

// a container component
export const KandyKorner = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)