import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profil from "./components/Profil";
import Crmef from "./components/Crmef";
import Msp from "./components/Msp";
import Module from "./components/Module";
// @ts-ignore
import data from "./data";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Profil} />
          <Route path="/crmef" Component={Crmef} />
          <Route path="/msp" Component={Msp} />
          <Route
            path="/crmef/Planification"
            element={
              <Module
                num1={1}
                num2={2}
                intro={data.planification.planintro}
                sideimg={"assets/planification.svg"}
                cards={data.planification.plancards}
              />
            }
          />
          <Route
            path="/crmef/Gestion1"
            element={
              <Module
                num1={1}
                num2={2}
                intro={data.gestion.gestintro}
                sideimg={"assets/gestion.svg"}
                cards={data.gestion.gestcards}
              />
            }
          />
          <Route
            path="/crmef/MRA"
            element={
              <Module
                num1={1}
                num2={2}
                intro={data.recherche.rechintro}
                sideimg={"assets/recherche.svg"}
                cards={data.recherche.rechcards}
              />
            }
          />
          <Route
            path="/crmef/Algo_Prog"
            element={
              <Module
                num1={1}
                num2={2}
                intro={data.programmation.progintro}
                sideimg={"assets/python.svg"}
                cards={data.programmation.progcards}
              />
            }
          />
          <Route
            path="/crmef/Didactique"
            element={
              <Module
                num1={2}
                num2={1}
                intro={data.didactique.didaintro}
                sideimg={"assets/didactique.svg"}
                cards={data.didactique.didacards}
              />
            }
          />
          <Route
            path="/crmef/TICE"
            element={
              <Module
                num1={2}
                num2={1}
                intro={data.tice.ticeintro}
                sideimg={"assets/tice.svg"}
                cards={data.tice.ticecards}
              />
            }
          />
          <Route
            path="/crmef/ScienceEducation"
            element={
              <Module
                num1={2}
                num2={1}
                intro={data.scienceEducation.scintro}
                sideimg={"assets/scienceEducation.svg"}
                cards={data.scienceEducation.sccards}
              />
            }
          />
          <Route
            path="/crmef/Architecture"
            element={
              <Module
                num1={2}
                num2={1}
                intro={data.architecture.archintro}
                sideimg={"assets/architecture.svg"}
                cards={data.architecture.archcards}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
