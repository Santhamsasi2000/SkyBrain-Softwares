import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Service from './Components/Service/Service';
import OurTeam from './Components/OurTeam/OurTeam';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" Component={() => <LandingPage />}></Route>
          <Route path="/service" Component={() => <Service />}></Route>
          <Route path="/ourteam" Component={() => <OurTeam />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
