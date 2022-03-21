import {useState, useEffect} from "react"
import Head from "./Head"
import Nav from "./Nav"
import {nanoid} from "nanoid"
import InputBox from "./InputBox"
import Table from "./Table"

const isFormDataFilled = (formData)=>
  !Object.values(formData).every((item)=>item==="");

export default function App(){
    const [tableData, setTableData] = useState(
     JSON.parse(localStorage.getItem('tableData')) || []
     );

    const [addFormData, setAddFormData] = useState(
      {
        type: "",
        date: "",
        name: "",
        amount: "",
    });

      const handleAddFormChange = (event) => {
        setAddFormData((prevData)=>{
        return {...prevData, [event.target.name]:event.target.value};
 });
};
      const handleAddFormSubmit = () => {
        if(isFormDataFilled(addFormData)){
          let newEntry = addFormData;
          newEntry.id = nanoid();
          setTableData((prevData)=>[...prevData, newEntry]);
         setAddFormData({
           type:'', 
           date:'', 
           name:'', 
           amount:''
          });
        }else{
          alert("Form not filled out fully");
        }
      };

      const handleDeleteFunction=(rowId)=>{
        const newRows = [...tableData];
        const index = tableData.findIndex((row)=>row.id===rowId);
        newRows.splice(index,1);
        setTableData(newRows);
      };


     
  useEffect(() => {
    localStorage.setItem('tableData', JSON.stringify(tableData))
  }, [tableData])
    return(
        <>
        <Nav />
        <Head />
        <InputBox 
        handleAddFormSubmit={handleAddFormSubmit}
        handleAddFormChange={handleAddFormChange} 
        addFormData={addFormData}/>
        <Table
        tableData={tableData} 
        handleDeleteFunction={handleDeleteFunction}/>
        </>
    );
    }