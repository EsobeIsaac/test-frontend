import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // Problem Statement
  // Time taken 1 hour 
  // Given an Array of object for Doctors called doctorData, I want to be able to
  // select as much of them as possible and specify the department which they belong
  // to in real time from an Array of objects containing all department called departmentData
  // then stringify your result and log it on a click of a button.

  // NB: Use the id to represent both the doctors and department
  // in the final answer and this test is mainly dependent on
  // functionality/architecture not so much on your design.
  const [doctorData, setDoctorData] = useState([
    { id: 0, name: "Dr. Curtis" },
    { id: 1, name: "Dr. Smith" },
    { id: 2, name: "Dr. Johnson" },
    { id: 3, name: "Dr. Ben" },
    { id: 4, name: "Dr. Frank" },
    { id: 5, name: "Dr. Joe" },
    { id: 6, name: "Dr. Sheldon" },
    { id: 7, name: "Dr. Raji" },
  ]);

  const [departmentData, setDepartment] = useState([
    { id: 0, name: "OBGYN Department" },
    { id: 1, name: "Emergency Department" },
    { id: 2, name: "Cardiology Department" },
    { id: 3, name: "Pediatrics Department" },
    { id: 4, name: "Surgery Department" },
  ]);

  const [doc, setDoc] = useState("")
  const [dep, setDep] = useState("")

  const handleSubmit = (doc, dep) => {
    setDoctorData((prevState)=>{
      const newArr = doctorData.map((item)=>{
        console.log(doc)
        if(item.id == doc) {
          item.department = dep
        }

        return item
      })
      return newArr
    })
    setDep("");
    setDoc("")
  }

  const displayResult = () => {
    console.log(JSON.stringify(doctorData))
  }

  return (
    <div className="App">
      <div className='broad'>
      <form onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit(doc, dep)
      }}>
        <label htmlFor='doctor'>Doctor:</label><br/>
        <select value={doc} onChange={(e)=>setDoc(e.target.value)}>
          <option value="" key="non"></option>
          {
            doctorData.map((item)=>{
              return <option value={item.id} key={item.id}>{item.name}</option>
            })
          }
        </select><br/>
        <label htmlFor='doctor'>Department:</label><br/>
        <select value={dep} onChange={(e)=>setDep(e.target.value)}>
          <option value="" key="non"></option>
          {
            departmentData.map((item)=>{
              return <option value={item.id} key={item.id}>{item.name}</option>
            })
          }
        </select><br/><br/>

        <button>Submit</button><br/><br/><br/>
      </form>
      <button onClick={()=>{displayResult()}}>Display Result</button>
      </div>
    </div>
  );
}

export default App;
