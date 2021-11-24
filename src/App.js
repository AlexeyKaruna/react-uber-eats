import logo from './logo.svg';
import './App.css';
import HeaderButton from './components/HeaderButton' 

function App(props) {
  return (
    <div className="App">             
     <HeaderButton text = "Signin" primary />
     <HeaderButton text = "Register" />
     <HeaderButton text = "ASAP" primary />
    </div>
  );
}

export default App;
