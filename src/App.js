import React,{useState} from "react"
import ReactDOM from "react-dom"
import Head from "./Head"
import Nav from "./Nav"
import {nanoid} from "nanoid"
import InputBox from "./InputBox"
import AddButton from "./AddButton"
import Table from "./Table"


export default function App(){

    const [tableData, setTableData] = useState([])
    const [addFormData, setAddFormData] = useState({
        type: "",
        date: "",
        name: "",
        amount: "",
    }
    );

      const handleAddFormChange = (event) => {
        event.preventDefault();
  
        const newInput = (data)=>({...data, [event.target.name]:event.target.value})
        setAddFormData(newInput)
 }
     

      const handleAddFormSubmit = (event) => {
        event.preventDefault();
    

        const checkEmptyInput = !Object.values(addFormData).every(res=>res==="")
        if(checkEmptyInput)
        {
         const newData = (data)=>([...data, addFormData])
         setTableData(newData);
         const emptyInput= {type:'', date:'', name:'', amount:''}
         setAddFormData(emptyInput)
        }
    } 






      //   const newData = {
      //     id: nanoid(),
      //     type: addFormData.type,
      //     date: addFormData.date,
      //     name: addFormData.name,
      //     amount: addFormData.amount,
      //   };

      //   const newRow = [...addFormData,];
      //   setAddFormData(newRow);
      // };
    return(
        <div>
        <Nav />
        <Head />
        <React.StrictMode>
        <form  onSubmit={handleAddFormSubmit}>

     <div className="form-inline">
        <div className="form-group col-md-4">
            <label className="type-label">Type:</label> 
            <select className="form-control type-input" name="type" value={addFormData.type} onChange={handleAddFormChange}>
                <option  >Cash</option>
                <option >Card</option>
                <option >Crypto</option>
                <option >Other</option>
                </select>
            </div>
            


        <div className="form-group col-md-4">
            <label className="date-options date-label">Date:</label> 
            <input type = "date" className="form-control date-input" name="date"value={addFormData.date} onChange={handleAddFormChange}/>
        </div>
    </div>

    <div className="form-inline">
        <div className="form-group col-md-4">
            <label className="name-label" >Name:</label> 
            <input type="text" placeholder="What did you spend on?" className="form-control name-input" name="name" value={addFormData.name} onChange={handleAddFormChange}/>
            </div>
            


        <div className="form-group col-md-4">
            <label className="date-options amount-label">Amount:</label> 
            <input type="number"  placeholder="How much?"className="form-control amount-input" name="amount" value={addFormData.amount} onChange={handleAddFormChange}></input>
        </div>
    </div>

        </form>
        <div className ="col text-center">
        <button  type="submit" className ="btn btn-primary" value="Submit"onClick={handleAddFormSubmit} >Add a new expense</button>
        </div>
        <table className="table table-striped table-hover">
  <thead key = "thead">
    <tr>
      <th scope="col" className=" bg-warning" >Type</th>
      <th scope="col"className=" bg-warning">Date</th>
      <th scope="col"className=" bg-warning">Decsription</th>
      <th scope="col"className=" bg-warning">Amount</th>
    </tr>
  </thead>
  <tbody tbody="tbody">
    {
    tableData.map((data,index)=>(
     <tr key={index}>
     <td scope="row">{data.type}</td>
     <td >{data.date}</td>
     <td >{data.name}</td>
     <td >${data.amount}</td>
   </tr>
    ))}
   
    </tbody>
  </table>
  </React.StrictMode>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))