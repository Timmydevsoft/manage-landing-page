import React from "react"
export default function Tworightcontenet (props){
    return (
        <div className="contentone">
            <button>{props.number}</button>
            <div className="head-and-p">
                <div className="managep-container">
                    <h3>{props.manageproduct}</h3>
                </div>
                <p>{props.producbody}</p>
            </div>

        </div>
    )
}