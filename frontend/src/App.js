import logo from './logo.svg';
import './App.css';
import PartnerDetails from './components/PartnerDetails.tsx'
import PartnerList from './components/PartnerList.tsx'

function App() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PartnerDetails />
        <PartnerList />
      </header>
    </div>
  );
}

export default App;
