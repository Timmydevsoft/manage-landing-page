import React from "react"
export default function Testimonials (props){
    return (
        <div className="testimonies">
            <img id="passport" src={props.passport} alt="testifier"/>
            <span id="testifier">{props.testifiername}</span>
            <p>{props.testimony}</p>
       </div>
    )
}