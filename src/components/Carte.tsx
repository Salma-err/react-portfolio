import { Link } from "react-router-dom";

function Carte(props: {
  prof: any;
  id: any;
  url: any;
  image: any;
  titre: any;
}) {
  var image = `/static/assets/${props.image}`;
  var titre = props.titre;
  var url = props.url;
  var id = props.id;
  var prof = props.prof;
  return (
    <div className="col-3">
      <div className="card" id={id}>
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{titre}</h5>
          <h6>{prof}</h6>
          <Link to={url} className="btn btn-primary">
            Visualiser
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Carte;
