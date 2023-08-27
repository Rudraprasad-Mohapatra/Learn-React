import logo from './logo.svg';
import './App.css';
import DogCard1 from './DogCard';
import Image from './Image';

function App() {
  return (
    <div className="App">
      Namaste Biswa!
      <DogCard1 />
      <Image />
      <span id="name">Name</span>
      <button id="btn">submit</button>
    </div>
  );
}

export default App;
