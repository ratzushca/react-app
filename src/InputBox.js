import React from "react"


export default function InputBox(){
    return(
        <form>
        <div className="div1-input">
        <span className="type-option">Type:</span> 
        <select className="card-options" >
            <option className="card-input" >Cash</option>
            <option className="card-input">Card</option>
            <option className="card-input">Crypto</option>
            <option className="card-input">Other</option>
            </select>
        <span className="date-options">Date:</span> 
        <input type = "date" className="date-input"/>
        </div>
        <div className="div2-input">
        <span className="name-option">Name:</span>
        <input type="text" placeholder="What did you spend on?" className="name-input"></input>
        <span className="amount-option">Amount:</span> 
        <input type="number"  placeholder="How much?"className="amount-input"></input>
        </div>
        </form>
    )
}