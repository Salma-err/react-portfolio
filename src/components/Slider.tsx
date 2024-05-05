import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Slider(props: { images: string[] }) {
  var fadeImages = props.images;
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img
              style={{ width: "100%" }}
              src={fadeImage}
              className="sliderImg"
            />
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Slider;
