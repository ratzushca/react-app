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
         const emptyInput= {id: nanoid(),type:'', date:'', name:'', amount:''}
         setAddFormData(emptyInput)
        }
    } 

      const hadleDeleteFunction=(rowId)=>{
        const newRows = [...tableData];
        const index = tableData.findIndex((row)=>row.id===rowId);
        newRows.splice(index,1);
        setTableData(newRows);
      };


    return(
        <div>
        <Nav />
        <Head />
        <React.StrictMode>
        <InputBox 
        handleAddFormSubmit={handleAddFormSubmit}
        handleAddFormChange={handleAddFormChange} 
        addFormData={addFormData}/>
        <AddButton
        handleAddFormSubmit={handleAddFormSubmit}/>
        <Table
        tableData={tableData} 
        hadleDeleteFunction={hadleDeleteFunction}/>
        </React.StrictMode>
        </div>
    )
}
