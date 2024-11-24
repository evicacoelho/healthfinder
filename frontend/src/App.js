import logo from './logo.svg';
import './App.css';
import PartnerDetails from './components/PartnerDetails.tsx'
import PartnerList from './components/PartnerList.tsx'
import Map from './components/Map.tsx'


function App() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <PartnerDetails />
        <PartnerList />
        <Map />
      </header>
    </div>
  );
}

export default App;
