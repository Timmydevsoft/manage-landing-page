import React from "react"
export default function Team(props){
    return(
        <section className="team">
            <h5>{props.teamhead}</h5>
            <button>{props.start}</button>
        </section>
    )
}