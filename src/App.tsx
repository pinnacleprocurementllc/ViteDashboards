import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contract from "./page/Contract";
import Recipient from './page/Recipient';
import SmallBusiness from './page/SmallBusiness';
import SubContract from './page/SubContract';

function Home() {
  return <div><h2>Home Page</h2></div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/recipients" element={<Recipient />} />
        <Route path="/smallbusiness" element={<SmallBusiness />} />
        <Route path="/subcontract" element={<SubContract />} />
      </Routes>
    </Router>
  )
}

export default App
