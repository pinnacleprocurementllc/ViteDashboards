import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contract from "./page/Contract";
import Recipient from './page/Recipient';
import SmallBusiness from './page/SmallBusiness';
import SubContract from './page/SubContract';
import Home from './page/Home';
import SoftwareContracts from "./page/SoftwareContracts";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/recipients" element={<Recipient />} />
        <Route path="/smallbusiness" element={<SmallBusiness />} />
        <Route path="/subcontract" element={<SubContract />} />
        <Route path="/softwarecontracts" element={<SoftwareContracts />} />
      </Routes>
    </Router>
  )
}

export default App
