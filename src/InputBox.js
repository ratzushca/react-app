import React from "react"


export default function InputBox(){
    return(
        <form>

     <div className="form-inline">
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
            <label className="date-options date-label">Date:</label> 
            <input type = "date" className="form-control date-input"/>
        </div>
    </div>

    <div className="form-inline">
        <div className="form-group col-md-4">
            <label >Name:</label> 
            <input type="text" placeholder="What did you spend on?" className="form-control"></input>
            </div>
            


        <div className="form-group col-md-4">
            <label className="date-options amount-label">Amount:</label> 
            <input type="number"  placeholder="How much?"className="form-control amount-input"></input>
        </div>
    </div>
    
        </form>
    )
}