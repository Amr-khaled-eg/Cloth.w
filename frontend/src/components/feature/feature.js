import React from "react";
import "./feature.css";

function Feature({ direction, img, header }) {
  // const [state, setState] = React.useState({ image: null });
  // the follwoing code is for getting the image from the server
  // React.useEffect(() => {
  //   fetch("http://192.168.1.8:8080/image")
  //     .then((res) => {
  //       console.log(res);
  //       return res.blob();
  //     })
  //     .then((image) => {
  //       setState({ image: URL.createObjectURL(image) });
  //     });
  // }, []);
  return (
    <div
      className={
        direction === "rev"
          ? "flex flex-reverse"
          : direction === "col"
          ? "flex flex-colmun"
          : "flex"
      }
    >
      <div>
        <h1 className="feature-header">{header}</h1>
        {direction === "" ? <button> Shop Now</button> : null}
      </div>

      <img
        src={"http://localhost:8080" + img}
        alt="img"
        className={direction === "col" ? "wide-photo" : "photo"}
      />
    </div>
  );
}
export default Feature;
