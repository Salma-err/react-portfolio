import Carte from "./Carte";
import Devider from "./Devider";
import FirstSectionP from "./FirstSectionP";
import Footer from "./Footer";
import Header from "./Header";

function Module(props: {
  num1: any;
  num2: any;
  intro: any;
  sideimg: any;
  cards: any;
}) {
  var intro = props.intro;
  var sideimg = props.sideimg;
  var num1 = props.num1;
  var num2 = props.num2;
  var cards = props.cards;
  const affcards = cards.map((card: { [x: string]: any }) => (
    <Carte
      image={card["image"]}
      titre={card["titre"]}
      url={card["url"]}
      id={"docs"}
      prof={undefined}
    />
  ));

  return (
    <div>
      <Header></Header>
      <FirstSectionP
        image={sideimg}
        texte={intro}
        id={"simple"}
        num1={num1}
        num2={num2}
      />
      <Devider id={"up"} />
      <div className="container cartes">
        <h1>Documents :</h1>
        <div className="content">{affcards}</div>
      </div>
      <Devider id={"down"} />
      <Footer />
    </div>
  );
}
export default Module;
