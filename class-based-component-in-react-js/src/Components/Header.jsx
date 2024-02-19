import React from "react";


// function Header(props) {
//     return (
//         <div>
//             <Header />
//             <Greeting />
//         </div>
//     );
// }

class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}</p>
            </header>
        );
    }
}

export default Header;
