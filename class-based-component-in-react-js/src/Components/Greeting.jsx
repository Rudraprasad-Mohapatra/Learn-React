import React from "react";

// function Greeting({timeOfDay}) {
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfday

//     if(hours < 12) {
//         timeOfday = "morning"
//     }else if(hours >= 12 && hours < 17) {
//         timeOfday = "afternoon"
//     } else {
//         timeOfday = "night"
//     }
//     return (
//         <h1>Good {timeOfday} to you, sir or madam.</h1>
//     )
// }

class Greeting extends React.Component {
    render() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfday
        if (hours < 12) {
            timeOfday = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfday = "afternoon"
        } else {
            timeOfday = "night"
        }

        return (
            <h1>Good {timeOfday} to you, sir or madam.</h1>
        )
    }
}

export default Greeting;