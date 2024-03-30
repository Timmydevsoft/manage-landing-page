import React from "react"
import testimonialData from "./testimonialData" // Importing data for testimonials
import Testimonials from "./Testimonials" // Importing Testimonials component


export default function Testimonial(props) {
    
    // State to track the index of the currently visible testimonial
    const [currentTestimony, setCurrentTestimony] = React.useState(0);

    // Ref to the container element holding the testimonials
    const testimonyContainerRef = React.useRef(null);

    // Effect to handle scrolling and update the current testimonial index
    React.useEffect(() => {
        
        const handleScroll = () => {
            
            const container = testimonyContainerRef.current;
            
            const scrollLeft = container.scrollLeft;
            
            const childWidth = container.scrollWidth / testimonialData.length;
            
            const newIndex = Math.round(scrollLeft / childWidth);

            // Updating the state with the new index
            setCurrentTestimony(newIndex);
            
        };

      
        const container = testimonyContainerRef.current;
        container.addEventListener("scroll", handleScroll);

        
        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Mapping testimonialData to Testimonials components
    const testimonialComponents = testimonialData.map(item => (
        <Testimonials
            key={item.id} 
            passport={item.passport} 
            testifiername={item.name} 
            testimony={item.testimony} 
            
            isSelected={item.id === currentTestimony}
        />
    ));

    // Mapping testimonialData to indicator elements

    const indicators = testimonialData.map((_, index) => (
        <span 
            key={index}
            // Adding 'active' class to indicators for currently visible testimonial
            className={`indicators ${index === currentTestimony ? "active" : ""}`}
        ></span>
    ));

    // Rendering the Testimonial component
    return (
        <section className="testimonial">

            
            <h4 id="test-head">What they’ve said</h4> 
                
           
            <div className="testimonial-container" ref={testimonyContainerRef}>
               {testimonialComponents}
            </div>

           
            <div className="indicator-container">
                {indicators}
            </div>

            <button>Get Started</button>

        </section>
    )
}
