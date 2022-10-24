import React, { useEffect, useState } from 'react'
import ChoreList from './ChoreList'

let choreList = localStorage.getItem("chores") ? 
JSON.parse(localStorage.getItem("chores")) :
[];

const ChoreForms = () => {
    const [choreName, setChoreName] = useState("");
    const [choreDesc, setChoreDesc] = useState("");
    const [choreDate, setChoreDate] = useState("");
    const [choreData, setChoreData] = useState(choreList);

    let handleSubmit = (e) => {
        e.preventDefault();
        // let choreLog = {name: choreName, desc: choreDesc, date: choreDate};
        setChoreData([...choreData, {id: choreData.length, name: choreName, 
        desc: choreDesc, date: choreDate}]) //Can pass directly choreLog to setChoreData
        // setChoreData([...choreData, {id: choreData.length, log: choreLog}])
        // setChoreName("")
        // setChoreDesc("")
        // setChoreDate("")
    } 

    useEffect(() => {
        localStorage.setItem("chores", JSON.stringify(choreData)) //chores - dependency
    },[choreData])
    return (
        <form onSubmit={e => {handleSubmit(e)}}>
            <h2>Chore List</h2>
            <label>Chore Name</label> <br/>
            <input type="text" value={choreName} name="choreName" 
            onChange={e => setChoreName(e.target.value)}></input>

            <br/>
        
            <label>Description</label> <br/>
            <input type="text" value={choreDesc} name="choreDesc"
            onChange={e => setChoreDesc(e.target.value)}></input>

            <br/>
        
            <label>Date</label> <br/>
            <input type="date" value={choreDate} name="choreDate"
            onChange={e => setChoreDate(e.target.value)}></input> <br/>

            <input type="submit" value="Submit"></input>

            <ChoreList data={choreData} />
            {/* <table>
                <tr>
                    <th>Chore Name</th>
                    <th>Chore Description</th>
                    <th>Chore Date</th>
                </tr>
                {choreData.map(e =>
                <tr>
                    <td>{e.name}</td>
                    <td>{e.desc}</td>
                    <td>{e.date}</td>
                </tr>
                )}
            </table> */}
        </form>
        
    )

}

export default ChoreForms