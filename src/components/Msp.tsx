import Carte from "./Carte";
import Devider from "./Devider";
import FirstSectionP from "./FirstSectionP";
import Footer from "./Footer";
import Header from "./Header";

function Msp() {
  var texte = (
    <p className="sidetexteSimple">
      <span className="text-highlight">
        La mise en situation professionnelle
      </span>{" "}
      revêt une importance capitale dans la formation des enseignants
      stagiaires, car elle leur offre une occasion précieuse de mettre en
      pratique les connaissances théoriques acquises en formation et de
      développer les compétences essentielles à leur futur métier.
    </p>
  );
  return (
    <div>
      <Header></Header>
      <FirstSectionP
        image={"msp.svg"}
        texte={texte}
        id={"simple1"}
        num1={1}
        num2={2}
      />
      <Devider id={"up"} />
      <div className="container cartes">
        <h1>Formation :</h1>
        <h3>Semestre 1 :</h3>
        <div className="content">
          <Carte
            image={"msp1.png"}
            titre={"Compte rendu de la MSP"}
            url={
              "https://drive.google.com/file/d/1QeflKjHqf_7RK_-5bJU9Aq8m6Mayc7sV/view?usp=drive_link"
            }
            id={"docs"}
            prof={undefined}
          />
          <Carte
            image={"msp2.png"}
            titre={"Fiche d'observation de l'adiministration"}
            url={
              "https://drive.google.com/file/d/1DYFnYmNhYeDrYWpugSwG09X4mLfTRWYx/view?usp=drive_link"
            }
            id={"docs"}
            prof={undefined}
          />
          <Carte
            image={"msp3.png"}
            titre={"Fiche d'observation de l'apprenant"}
            url={
              "https://drive.google.com/file/d/1puvZGCgva0IxV-J0MsVOfxT71XbNg2nf/view?usp=drive_link"
            }
            id={"docs"}
            prof={undefined}
          />
          <Carte
            image={"msp4.png"}
            titre={"Présentation du cours du Tronc Commun: MSP"}
            url={
              "https://drive.google.com/file/d/1ppiv1ikwhYPHIqUz4NuxO8L1W2dV-1sR/view?usp=drive_link"
            }
            id={"docs"}
            prof={undefined}
          />
          <Carte
            image={"msp5.png"}
            titre={"Cours du Tronc Commun: MSP"}
            url={
              "https://drive.google.com/file/d/1Vzk_H4qlY_sZrX1TXCX9hk8AIu3nIEKv/view?usp=drive_link"
            }
            id={"docs"}
            prof={undefined}
          />
          <Carte
            image={"msp6.png"}
            titre={"Contrôle n°1: MSP"}
            url={
              "https://drive.google.com/file/d/1F3Cve36gSrlqmXDCXk1zYXPjNaizIJOL/view?usp=drive_link"
            }
            id={"docs"}
            prof={undefined}
          />
          <Carte
            image={"msp9.png"}
            titre={"Fiche pédagogique: Notion de fichier et dossier"}
            url={
              "https://drive.google.com/file/d/1BqNWe1M6sjBo8LH60zh2IgfvHKz90_PO/view?usp=drive_link"
            }
            id={"docs"}
            prof={undefined}
          />
          <Carte
            image={"msp10.png"}
            titre={"Fiche de contrôle: Contrôle n°1"}
            url={
              "https://drive.google.com/file/d/1_rUoUb_AcEDKX_mnO_PVmeIJE5E-U1W5/view?usp=drive_link"
            }
            id={"docs"}
            prof={undefined}
          />
        </div>
      </div>
      <Devider id={"down"} />
      <div className="masthead sectionP video">
        <div className="container">
          <iframe
            src="https://drive.google.com/file/d/1hWSAtEEgHHeJpdBgC7DCwXmIf2NIIY3A/preview"
            width="800"
            height="400"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Msp;
