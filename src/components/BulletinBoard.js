//rafce for template
import React from 'react'

export const BulletinBoard = (props) => {
    if(props.category == null || props.post == null){
        return "";
    }
    return (
        <div>
            <div><h3>Category: {props.id}</h3></div>
            <div><h4>Category: {props.category}</h4></div>
            <div><h5>Post: {props.post}</h5></div>
        </div>
    )
}

export default BulletinBoard;
