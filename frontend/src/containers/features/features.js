import React from "react";
import BrightDiv from "../../components/brightDiv/brightDiv";
import "./features.css";
import img from "./img.jpg";
import men from "./men.svg";
import women from "./women.jpg";
import gsap, { Power3 } from "gsap";
// import Feature from "../components/feature/feature";
function Features() {
  let header = React.useRef(null);
  let image = React.useRef(null);
  let btn = React.useRef(null);
  // const [state, setState] = React.useState([]);
  // React.useEffect(() => {
  //   fetch("http://localhost:8080/collections")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setState(data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);
  React.useEffect(() => {
    console.log(btn);
    let tl = gsap.timeline();
    tl.to(header, {
      webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      ease: Power3.easeInOut,
      duration: 2,
    })
      .to(
        image,
        {
          webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

          duration: 2,
          ease: Power3.easeInOut,
        },

        "-=1"
      )
      .to(
        image,
        {
          scale: 1,
          duration: 2,
          ease: Power3.easeInOut,
        },
        "-=1"
      )
      .from(btn, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: Power3.easeInOut,
      });
    document.querySelectorAll(".links a").forEach((a) => {
      a.style.color = "white";
    });
    document.querySelector(".logo").style.color = "white";
    return () => {
      document.querySelectorAll(".links a").forEach((a) => {
        a.style.color = "black";
      });
      document.querySelector(".logo").style.color = "black";
    };
  }, []);
  return (
    // <div>
    //   {state.map((feature, index) => {
    //     return (
    //       <Feature
    //         direction={
    //           index % 3 === 0
    //             ? ""
    //             : index % 3 === 1
    //             ? "col"
    //             : index % 3 === 2
    //             ? "rev"
    //             : ""
    //         }
    //         img={feature.image}
    //         header={feature.header}
    //         key={index}
    //       />
    //     );
    //   })}
    // </div>+
    <div>
      <div className="section intro">
        <div className="content">
          <h1
            className="feature-header"
            ref={(h) => {
              header = h;
            }}
          >
            All The Cloth You Like In One Place
          </h1>
          <button
            className="shop-now-btn"
            ref={(b) => {
              btn = b;
            }}
          >
            {" "}
            Shop Now
          </button>
        </div>
        <div className="img-zoom">
          <img
            src={img}
            alt="img"
            className="photo"
            ref={(ref) => {
              image = ref;
            }}
          />
        </div>
      </div>
      <div className="men section">
        <div className="men-content">
          <h1 className="men-header">Great New Men Collections</h1>
          <p className="men-p">
            we have a new formal collection for men that looks amazing on
            anybody and a new winter collection that will fit anyone
          </p>
          <button className="circle-btn men-btn"> Shop </button>
        </div>
        <img src={men} alt="men photos" className="men-photos" />
      </div>
      <BrightDiv className="section women">
        <div className="content women-content">
          <h1 className="feature-header2">Women New Collectoin</h1>
          <button className="circle-btn women-btn">Shop Now</button>
        </div>
        <div className="img-zoom">
          <img src={women} alt="img" className="photo2  " />
        </div>
      </BrightDiv>
    </div>
  );
}
export default Features;
