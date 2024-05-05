import Header from "./Header";
import FirstSectionP from "./FirstSectionP";
import Devider from "./Devider";
import Footer from "./Footer";

function Profil() {
  var texte = (
    <div>
      <h4>Salut,</h4>
      <h6>
        Je suis <span className="text-highlight">Salma ERRAMI</span>
      </h6>
      <p id="pro">Professeur Stagiaire au CRMEF Marrakech.</p>
      <a className="btn btn-primary" href="#profil">
        Visualiser CV
      </a>
    </div>
  );
  return (
    <div>
      <Header></Header>
      <FirstSectionP
        texte={texte}
        image={"salma.jpg"}
        id={"prof"}
        num1={1}
        num2={2}
      />
      <Devider id={"up"} />
      <div className="container" id="profil">
        <div className="row">
          <h2>Informations personnelles :</h2>
          <img src="assets/personel.jpg" alt="" />
        </div>
        <div className="row">
          <h2>Parcours professionnel :</h2>
          <img src="assets/timeline.jpg" alt="" />
        </div>
      </div>
      <Devider id={"down"} />
      <Footer />
    </div>
  );
}
export default Profil;
