import React from "react"
import bgillustrationintro from "../assets/illustration-intro.svg"
export default function Sectionone (props){
    return(
      <section>
         <div className="section-one">
                <div className="left-container">
                    <h1>Bring everyone together to build better products.</h1>
                    <p> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                    <button> Get Started</button>
                </div>

                <div className="right-container">
                    <img src={bgillustrationintro} alt="iluustration-ontroduction" />
                </div>
         </div>
      </section>
    )
}