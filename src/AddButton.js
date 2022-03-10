import React from "react"


export default function AddButton({handleAddFormSubmit}){

    return(
        <div className ="col text-center">
        <button  type="submit" className ="btn btn-primary" value="Submit"onClick={handleAddFormSubmit} >Add a new expense</button>
        </div>
    )
}