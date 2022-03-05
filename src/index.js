import React from "react"
import ReactDOM from "react-dom"
import Head from "./Head"
import '../src/styles.css'

function App(){
    return(
        <div>
        <Head />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))