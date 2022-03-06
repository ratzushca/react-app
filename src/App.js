import React from "react"
import Head from "./Head"
import Nav from "./Nav"
import InputBox from "./InputBox"
import AddButton from "./AddButton"


export default function App(){
    return(
        <div>
        <Nav />
        <Head />
        <InputBox />
        <AddButton />
        </div>
    )
}