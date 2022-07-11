//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faclock } from '@fortawesome/free-solid-svg-icons';


// include your styles into the webpack bundle
import "../styles/index.css";



function SimpleCounter (props){
    return <div className="bigCounter">
         <div className="clock"> {props.timer}</div>
        <div className="one">{props.digitOne}</div>

    </div>;
}

let counter = 0;
setInterval(function(){
    const one = Math.floor(counter/1);
    const element = <FontAwesomeIcon icon="fa-solid fa-clock" />;
   
    counter++;
    ReactDOM.render(
    <SimpleCounter 
        digitOne={one}
        timer={element}
        />, 
    document.querySelector("#app"),
    );
},1000)


