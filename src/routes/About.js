import React from "react";
import "./About.css";

function About(props){
    console.log(props);
    return(
        <div className="about__container">
            <span>"400 years in the future, set in the year 2415, Aeon Flux is a mysterious assassin. Four centuries after a virus nearly annihilated the human race,leaving only five million survivors in a utopian city called Bregna.Aeon is struggling to destroy the Goodchild regime led by its namesake,Trevor Goodchild, the ruler of Bregna and a descendant of the man who found a cure for the deadly virus.As instructed by the Handler, Aeon is assigned to assassinate Goodchild,but there are deeper secrets to be discovered, and conspiracies to be foiled."
            </span>
            <span>- aeon-flux-2005</span>
        </div>
    )
}

export default About;
