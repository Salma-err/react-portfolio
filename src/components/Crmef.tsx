import Carte from "./Carte";
import Devider from "./Devider";
import FirstSectionP from "./FirstSectionP";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";

function Crmef() {
  var texte = (
    <p className="sidetexteSimple">
      <span className="text-highlight">
        Le Centre Régional des Métiers de l'Éducation et de la Formation de
        Marrakech
      </span>{" "}
      incarne un pilier essentiel du paysage éducatif au Maroc, jouant un rôle
      central dans le développement professionnel des enseignants, des
      formateurs et des acteurs de l'éducation, en proposant une gamme
      diversifiée de programmes de formation, de ressources pédagogiques et de
      services d'accompagnement.
    </p>
  );
  const images = [
    "assets/crmef1.jpg",
    "assets/crmef3.jpg",
    "assets/crmef2.jpg",
  ];
  return (
    <div>
      <Header></Header>
      <FirstSectionP
        image={"crmef.jpg"}
        texte={texte}
        id={"simple"}
        num1={2}
        num2={1}
      />
      <Devider id={"up"} />
      <div className="container slides">
        <Slider images={images} />
      </div>
      <div className="container">
        <h1>Formation :</h1>
        <h3>Semestre 1 :</h3>
        <div className="row">
          <Carte
            image={"recherche.svg"}
            titre={"Méthodologie de recherche-action"}
            url={"/crmef/MRA"}
            id={"module"}
            prof={"Mr.Radouane IQDOUR"}
          />
          <Carte
            image={"python.svg"}
            titre={"Algorithmique et programmation"}
            url={"/crmef/Algo_Prog"}
            id={"module"}
            prof={"Mr.Sidi Mohamed SNINEH"}
          />
          <Carte
            image={"scienceEducation.svg"}
            titre={"Science d'éducation"}
            url={"/crmef/ScienceEducation"}
            id={"module"}
            prof={"Mr.Mohammed CHERQUI"}
          />
          <Carte
            image={"planification.svg"}
            titre={"Planification"}
            url={"/crmef/Planification"}
            id={"module"}
            prof={"Mme.Rajae TAMRI"}
          />
          <Carte
            image={"didactique.svg"}
            titre={"Didactique"}
            url={"/crmef/Didactique"}
            id={"module"}
            prof={"Mme.Ouafae SERRAR"}
          />
          <Carte
            image={"architecture.svg"}
            titre={"Architecture des ordinateurs"}
            url={"/crmef/Architecture"}
            id={"module"}
            prof={"Mr.Soufiane BARIBI"}
          />
          <Carte
            image={"gestion.svg"}
            titre={"Gestion 1"}
            url={"/crmef/Gestion1"}
            id={"module"}
            prof={"Mme.Rajae TAMRI"}
          />
          <Carte
            image={"tice.svg"}
            titre={"TICE"}
            url={"/crmef/TICE"}
            id={"module"}
            prof={"Mme.Ouafae SERRAR"}
          />
        </div>
      </div>
      <Devider id={"down"} />
      <div className="masthead sectionP crm">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 contact">
              <h2>Contact du CRMEF Marrakech :</h2>
              <h4>
                <span>Adresse :</span> arset sinko, boulevard al mouzdalifa,
                Marrakesh, Morocco
              </h4>
              <h4>
                <span>Téléphone :</span> 05242-90192
              </h4>
              <h4>
                <span>Email :</span> crmef.ms.rh@gmail.com
              </h4>
              <h4>
                <span>Page Officiel :</span> {"  "}
                <a href="https://web.facebook.com/crmefms/?locale=fr_FR&_rdc=1&_rdr">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0,0,256,256"
                    style={{ fill: "#000000;" }}
                  >
                    <g
                      fill="#e64d61"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </h4>
            </div>
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13585.946073181276!2d-8.0102261!3d31.6479067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee824e47c459%3A0xf755fd6cbd66a843!2sCentre%20R%C3%A9gional%20des%20professions%20de%20l&#39;Education%20et%20de%20la%20Formation!5e0!3m2!1sfr!2sma!4v1714511506877!5m2!1sfr!2sma"
                width="400"
                height="300"
                style={{ border: "0;" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Crmef;
