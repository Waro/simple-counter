import React from "react";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import "../styles/index.css";

function SimpleCounter (props){
    return <div className="bigCounter">
         <div className="clock">{props.clock}</div>
        <div className="four">{props.digitFour}</div>
        <div className="three">{props.digitThree}</div>
        <div className="two">{props.digitTwo}</div>
        <div className="one">{props.digitOne}</div>
    </div>;
}

let counter = 0;
setInterval(function(){
    const one = Math.floor(counter % 10);
    const two = Math.floor(counter/10)%10;
    const three = Math.floor(counter/100)%100;
    const four = Math.floor(counter/1000)%1000;
    const element = <FontAwesomeIcon icon={faClock} />
     counter++;
    ReactDOM.render(
    
    <SimpleCounter 
        digitOne={one}
        digitTwo={two}
        digitThree={three}
        digitFour={four}
        clock ={element}/>,
        document.querySelector("#app"),
        
    );
},1000)


