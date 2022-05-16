// import logo from './logo.svg';
import './App.css';
import NavBar from './Component/Header/NavBar';
import SmartPhoneList from './Component/SmarPhone/SmartPhoneList';
import LapTopList from './Component/LapTop/LapTopList';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
       
    //   </header>
    // </div>
    <div>
      <NavBar />
      <SmartPhoneList />
      <LapTopList />
    </div>
  );
}

export default App;
