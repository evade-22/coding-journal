import React, { useState , useRef, useEffect} from 'react'
import ContactList from '../components/ContactList';

let list = localStorage.getItem("contact") ?
JSON.parse(localStorage.getItem("contact")) :
[];

const ContactUs = () => {
    let firstNameRef = useRef("");
    let lastNameRef = useRef("");
    let emailRef = useRef("");
    let messageRef = useRef("");
    let [id, setId] = useState(Date.now());
    let [infoList, setInfoList] = useState(list);

    //Saving data inside table
    let handleSubmit = (event) => {
        event.preventDefault();
        //Get user input
        let info = {
            id: id,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        };
        //Returns only item that matches current ID
        let filter = infoList.filter((item) => {
            return item.id === info.id;
        }); 

        if(filter.length === 0){
            setInfoList([...infoList, info]);
        } else {
            infoList.forEach((item, index) => {
                if(item.id === info.id){
                    infoList.splice(index,1,info);
                    setInfoList(infoList);
                }
            })
        }
        setId(Date.now())
        firstNameRef.current.value = ""
        lastNameRef.current.value = ""
        emailRef.current.value = ""
        messageRef.current.value = ""
    };
    useEffect(() => {
        localStorage.setItem("contact", JSON.stringify(infoList)) //chores - dependency
    },[infoList])

    
    //Removing specific Row
    let handleRemove = (e) => {
        let num = parseInt(e.target.id)
        const Remove = [...infoList].filter((item) => {
            return (isNaN(num)) ? false : item.id !== num;
        })
        setInfoList(Remove)
    }
    //Update specific row
    let handleUpdate = (e) => {
        let num = parseInt(e.target.id)
        infoList
        .filter((item) => {
            return item.id === num;
        })
        .map((item) => {
            setId(item.id);
            firstNameRef.current.value = item.firstName
            lastNameRef.current.value = item.lastName
            emailRef.current.value = item.email
            messageRef.current.value = item.message
        });
    }

return (
    <div>
        <form onSubmit={handleSubmit}>
            <label for="firstName">First Name</label> <br/>
            <input tabIndex={1} id="firstName" type="text"
             name="firstName" ref={firstNameRef} required></input>
        <br/>
            <label for="lastName">Last Name</label> <br/>
            <input tabIndex={2} id="lastName" type="text" 
            name="lastName" ref={lastNameRef} required></input>
        <br/>
            <label for="email">Email</label> <br/>
            <input tabIndex={3} id="email" type="email" 
            name="email" ref={emailRef} required></input>
        <br/>
            <label for="message">Message</label> <br/>
            <textarea tabIndex={4} id="message" type="text" name="message" 
            placeholder='Enter your message'ref={messageRef} required></textarea>
        <br/>
        <button type="submit">Submit</button>
        </form>
        <ContactList 
            details={infoList}
            handleRemove={handleRemove} 
            handleUpdate={handleUpdate}/>
    </div>
  )
}

export default ContactUs