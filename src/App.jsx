import React from "react"
import Header from "./component/Header"
import './App.css'
import Sectionone from "./component/Sectionone"
import Sectiontwo from "./component/Sectiontwo"
// import Testimonial from "./component/Testimonial"
import Team from "./component/Team"
import Footer from "./component/Footer"
import Testimonial from "./component/Testimonial"

// import Testimonials from "./component/Testimonials"
// import testimonialData from "./component/testimonialData"

function App() {


  return (
    <div className="body">
        <Header price=" Pricing" product=" Product" about ="ABout Us" career=" Careers" community="Community" getstarted="Get Started" />
        <Sectionone/>
        <Sectiontwo/>
        <Testimonial/>
        <Team teamhead=" Simplify how your team works today." start=" Get Started"/>
        <Footer
          home="home"
          price = "Pricing"
          products = "Products"
          about = "About Us"
          carrers = "Careers"
          policy = "Community"
          privacy = "Privacy Policy"
        />
    </div>
  )
}

export default App
