import React from "react"


export default function Nav(){
    return(
        <nav>
        <img src = {require("../src/Images/reactlogo.png")} className="image-icon" />
        <h3 className="nav-motto">Budget with a why</h3>
        </nav>
    )
}