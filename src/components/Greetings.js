import * as React from "react";

let Greetings = (props) => {
  let currentHour = new Date().getHours();
  let name = props.firstName + " " + props.lastName;
    let greetings;
    greetings = 
    (currentHour < 12) ? "Good Morning" :
    (currentHour < 17) ? "Good Afternoon" :
    (currentHour < 24) ? "Good Evening" :
    "";

    return(
        <div><b>{greetings} {name}</b></div>
    )
}
export default Greetings;