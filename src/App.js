import { useState } from "react";
import "./App.css";
// import NecklineColor from "./images/imagea.jpg";
// import WithoutNecklineColor from "./images/imageb.jpg";

function App() {
  const neckline = require(`./images/imagea.png`);
  const withoutNeckline = require(`./images/imageb.png`);
  const longSleeves = require(`./images/imagec.png`);
  const shortLength = require(`./images/imaged.png`);

  const shirts = { neckline, withoutNeckline, longSleeves, shortLength };

  // const [changeNecklace, setChangeNecklace] = useState(shirts.neckline);

  const [imageSrc, setImageSrc] = useState(shirts.neckline);

  const changeImageSrc = () => {
    setImageSrc(shirts.withoutNeckline);
  };
  const changeSecondImageSrc = () => {
    setImageSrc(shirts.neckline);
  };
  const changethirdImageSrc = () => {
    setImageSrc(shirts.longSleeves);
  };
  const changefourthImageSrc = () => {
    setImageSrc(shirts.shortLength);
  };

  return (
    <div className="container">
      {/* <img id="animation" alt="shirt" src={changeNecklace} />
      <br />
      <button
        className="animate"
        onClick={() => {
          setChangeNecklace(shirts.withoutNeckline);
        }}
      >
        change style
      </button>
      <button onClick={() => setChangeNecklace(shirts.neckline)}>
        change style
      </button> */}
      <img src={imageSrc} alt="Image" />
      <br />
      <button onClick={changeImageSrc}>Default</button>
      <button onClick={changeSecondImageSrc}>Shawl Collar</button>
      <button onClick={changethirdImageSrc}>Extra long Length</button>
      <button onClick={changefourthImageSrc}>Short Dress Length</button>
    </div>
  );
}

export default App;
