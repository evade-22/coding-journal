import React, { useState , useRef, useEffect} from 'react'
import ThoughtsList from '../components/TaskList';

    
    let list = localStorage.getItem("thoughts") ?
    JSON.parse(localStorage.getItem("thoughts")) :
    [];
    let today = new Date().toLocaleDateString()
    
    const Thoughts = () => {
        let [date, setDate] = useState(today)
        let messageRef = useRef("");
        let [id, setId] = useState(Date.now());
        let [thoughtList, setThoughtList] = useState(list);
    
        //Saving data inside table
        let handleSubmit = (event) => {
            event.preventDefault();
            //Get user input
            let info = {
                id: id,
                date: date,
                message: messageRef.current.value
            };
            //Returns only item that matches current ID
            let filter = thoughtList.filter((item) => {
                return item.id === info.id;
            }); 
    
            if(filter.length === 0){
                setThoughtList([...thoughtList, info]);
            } else {
                thoughtList.forEach((item, index) => {
                    if(item.id === info.id){
                        thoughtList.splice(index,1,info);
                        setThoughtList(thoughtList);
                    }
                })
            }
            setId(Date.now())
            setDate(Date().toLocaleDateString())
            messageRef.current.value = ""
        };
        useEffect(() => {
            localStorage.setItem("thoughts", JSON.stringify(thoughtList)) //chores - dependency
        },[thoughtList])
    
        
        //Removing specific Row
        let handleRemove = (e) => {
            let num = parseInt(e.target.id)
            const Remove = [...thoughtList].filter((item) => {
                return (isNaN(num)) ? false : item.id !== num;
            })
            setThoughtList(Remove)
        }
        //Update specific row
        let handleUpdate = (e) => {
            let num = parseInt(e.target.id)
            thoughtList
            .filter((item) => {
                return item.id === num;
            })
            .map((item) => {
                setId(item.id);
                messageRef.current.value = item.message
            });
        }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="Date">Date</label> <br/>
                {today}
            <br/>
                <label for="message">Thoughts for the Day</label> <br/>
                <textarea tabIndex={2} id="message" type="text" name="message" 
                placeholder='Input fields for thoughts' rows={4} cols={50} ref={messageRef} required></textarea>
            <br/>
            <button type="submit">Save</button>
            </form>
            <ThoughtsList 
                details={thoughtList}
                handleRemove={handleRemove}
                handleUpdate={handleUpdate}
                />
        </div>
      )
    }    

export default Thoughts