function FirstSectionP(props: {
  num1: any;
  num2: any;
  id: any;
  texte: any;
  image: any;
}) {
  var text = props.texte;
  var image = `./assets/${props.image}`;
  var id = props.id;
  var num1 = props.num1;
  var num2 = props.num2;
  return (
    <header className="masthead sectionP">
      <div className="container">
        <div className="row gx-5 align-items-center">
          <div className={`col-lg-6 order-${num1} sidepic`}>
            <img src={image} id={id} />
          </div>
          <div className={`col-lg-6 order-${num2}`}>
            <div className="text-center mb-5 mb-lg-0 text-center text-lg-start">
              <div className="lead fw-normal mb-5 sidetexte">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default FirstSectionP;
