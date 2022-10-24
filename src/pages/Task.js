import React, { useState , useRef, useEffect} from 'react'
import TaskList from '../components/TaskList';

    
    let list = localStorage.getItem("tasks") ?
    JSON.parse(localStorage.getItem("tasks")) :
    [];
    
    const Task = () => {
        let dateRef = useState("");
        let messageRef = useRef("");
        let [id, setId] = useState(Date.now());
        let [taskList, setTaskList] = useState(list);
    
        //Saving data inside table
        let handleSubmit = (event) => {
            event.preventDefault();
            //Get user input
            let info = {
                id: id,
                date: dateRef.current.value,
                message: messageRef.current.value
            };
            //Returns only item that matches current ID
            let filter = taskList.filter((item) => {
                return item.id === info.id;
            }); 
    
            if(filter.length === 0){
                setTaskList([...taskList, info]);
            } else {
                taskList.forEach((item, index) => {
                    if(item.id === info.id){
                        taskList.splice(index,1,info);
                        setTaskList(taskList);
                    }
                })
            }
            setId(Date.now())
            dateRef.current.value = ""
            messageRef.current.value = ""
        };
        useEffect(() => {
            localStorage.setItem("tasks", JSON.stringify(taskList)) //chores - dependency
        },[taskList])
    
        
        //Removing specific Row
        let handleRemove = (e) => {
            let num = parseInt(e.target.id)
            const Remove = [...taskList].filter((item) => {
                return (isNaN(num)) ? false : item.id !== num;
            })
            setTaskList(Remove)
        }
        //Update specific row
        let handleUpdate = (e) => {
            let num = parseInt(e.target.id)
            taskList
            .filter((item) => {
                return item.id === num;
            })
            .map((item) => {
                setId(item.id);
                dateRef.current.value = item.date
                messageRef.current.value = item.message
            });
        }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="Date">Date</label> <br/>
                <input tabIndex={1} id="date" type="date"
                 name="date" ref={dateRef} required></input>
            <br/>
                <label for="message">Tasks</label> <br/>
                <textarea tabIndex={2} id="message" type="text" name="message" 
                placeholder='Input fields for tasks' rows={4} cols={50} ref={messageRef} required></textarea>
            <br/>
            <button type="submit">Save</button>
            </form>
            <TaskList 
                details={taskList}
                handleRemove={handleRemove}
                handleUpdate={handleUpdate}
                />
        </div>
      )
    }    

export default Task