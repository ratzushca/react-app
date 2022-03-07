import React from "react"


export default function InputBox(){
    return(
        <form>

     <div className="form-row">
        <div className="form-group col-md-4">
            <label >Type:</label> 
            <select className="form-control" >
                <option  >Cash</option>
                <option >Card</option>
                <option >Crypto</option>
                <option >Other</option>
                </select>
            </div>
            


        <div className="form-group col-md-4">
            <span className="date-options">Date:</span> 
            <input type = "date" className="form-control"/>
        </div>
    </div>




        <div className="div2-input ">
        <span className="name-option">Name:</span>
        <input type="text" placeholder="What did you spend on?" className="name-input"></input>
        <span className="amount-option">Amount:</span> 
        <input type="number"  placeholder="How much?"className="amount-input"></input>
        </div>
        </form>
    )
}