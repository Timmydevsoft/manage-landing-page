import React from "react"
import sectiontwoData from "./sectiontwoData"
import Tworightcontenet from "./Tworightcontenet"

export default function Sectiontwo(){

    const content = sectiontwoData.map(item =>{
        return (<Tworightcontenet key={item.id} number={item.number} manageproduct={item.manageproduct} producbody ={item.producbody} />)

    })
    
    return(
    <section className="section-two">
        <div className="sect-two-left-container">
            <h2> What’s different about Manage?</h2>
            <p className="two-p-intro">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
       </div>

       <div className="sect-tow-right-container">
         {content}
       </div>

    </section>

       
    )
}