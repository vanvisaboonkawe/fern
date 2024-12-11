import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './page/Carousel';
import Overview from './page/Overview';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Carousel />

      <Overview />
    </div>
  );
}

export default App;
