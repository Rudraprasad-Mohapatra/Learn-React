import React from "react";
import Header from "./Components/Header.jsx";
import Greeting from "./Components/Greeting.jsx";

// export default function App(props) {
//   return (
//     <h1> {props.type} Component</h1>
//   );
// }

// class App extends Component {

// }

class App extends React.Component {
  render() {
    return (
      <>
        <h1> {this.props.type} Component</h1>
        <Header username="Rudraprasad"></Header>
        <Greeting></Greeting>
      </>
    );
  }
}

export default App;
