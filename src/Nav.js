import React from 'react';


export default function Nav(){
    return(
        <nav className="navbar navbar-expand-sm sticky-top navbar-inverse navbar-expand-lg bg-dark">
             <a className="navbar-brand" href="#">
        <img 
        src = {require("../src/Images/reactlogo.png")} 
        width="35" 
        height="35"
        className="d-inline-block align-top" 
        alt="" 
        />
        <p className="d-inline-block align-top mb-0 h2">Budget with a why</p>
        </a>
        </nav>
    );
}