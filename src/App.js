import React,{useState} from "react"
import ReactDOM from "react-dom"
import Head from "./Head"
import Nav from "./Nav"
import InputBox from "./InputBox"
import AddButton from "./AddButton"
import Table from "./Table"


export default function App(){
    const [addFormData, setAddFormData] = useState([{
        type: "",
        date: "",
        name: "",
        amount: "",
    }]);

      const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
      };

      const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        const newData = {
          type: addFormData.type,
          date: addFormData.date,
          name: addFormData.name,
          amount: addFormData.amount,
        };

        const newDatas = [...newData];
        setAddFormData(newDatas);
      };
    return(
        <div>
        <Nav />
        <Head />
        <form onSubmit={handleAddFormSubmit}>

     <div className="form-inline">
        <div className="form-group col-md-4">
            <label className="type-label">Type:</label> 
            <select className="form-control type-input" name="type" onChange={handleAddFormChange}>
                <option  >Cash</option>
                <option >Card</option>
                <option >Crypto</option>
                <option >Other</option>
                </select>
            </div>
            


        <div className="form-group col-md-4">
            <label className="date-options date-label">Date:</label> 
            <input type = "date" className="form-control date-input" name="date" onChange={handleAddFormChange}/>
        </div>
    </div>

    <div className="form-inline">
        <div className="form-group col-md-4">
            <label className="name-label" >Name:</label> 
            <input type="text" placeholder="What did you spend on?" className="form-control name-input" name="name" onChange={handleAddFormChange}/>
            </div>
            


        <div className="form-group col-md-4">
            <label className="date-options amount-label">Amount:</label> 
            <input type="number"  placeholder="How much?"className="form-control amount-input" name="amount" onChange={handleAddFormChange}/>
        </div>
    </div>

        </form>
        <div className ="col text-center">
        <button  type="submit" className ="btn btn-primary" value="Submit" >Add a new expense</button>
        </div>
        <table className="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col" className=" bg-warning" >Type</th>
      <th scope="col"className=" bg-warning">Date</th>
      <th scope="col"className=" bg-warning">Decsription</th>
      <th scope="col"className=" bg-warning">Amount</th>
    </tr>
  </thead>
  <tbody>
    {addFormData.map((tData)=>(
     <tr>
     <td scope="row">{tData.type}</td>
     <td>{tData.date}</td>
     <td>{tData.name}</td>
     <td>{tData.amount}</td>
   </tr>
    ))}
   
    </tbody>
  </table>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))