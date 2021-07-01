import React from "react";
import "./features.css";
import img from "./img.jpg";
import men from "./men.svg";
import women from "./women.jpg";
import Button from "../Button/Button";
import FlexDiv from "../FlexDiv/FlexDiv";
import Header from "../Header/Header";
import gsap, { Power3 } from "gsap";
// import Feature from "../components/feature/feature";
function Features() {
  let header = React.useRef(null);
  let image = React.useRef(null);
  let btn = React.useRef(null);

  React.useEffect(() => {
    console.log(btn);
    let tl = gsap.timeline();
    tl.to(header.current, {
      webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      ease: Power3.easeInOut,
      duration: 2,
    })
      .to(
        image.current,
        {
          webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

          duration: 2,
          ease: Power3.easeInOut,
        },

        "-=1"
      )
      .to(
        image.current,
        {
          scale: 1,
          duration: 2,
          ease: Power3.easeInOut,
        },
        "-=1"
      )
      .from(btn.current, {
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
    <>
      <FlexDiv className="section intro">
        <div className="content">
          <Header
            color="white"
            size="lg"
            className="feature-header"
            ref={(h) => {
              header.current = h;
            }}
          >
            All The Cloth You Like In One Place
          </Header>
          <Button
            size="wide"
            color="#000"
            bg="#fff"
            className="mob-btn"
            ref={(b) => {
              btn.current = b;
            }}
          >
            Show Now
          </Button>
        </div>
        <div className="img-zoom">
          <img
            src={img}
            alt="img"
            className="photo"
            ref={(ref) => {
              image.current = ref;
            }}
          />
        </div>
      </FlexDiv>
      <FlexDiv mode="rsb" className="section">
        <div className="men-content">
          <Header size="lg" className="men-header">
            Great New Men Collections
          </Header>
          <p className="men-p">
            we have a new formal collection for men that looks amazing on
            anybody and a new winter collection that will fit anyone
          </p>
          <Button color="white">Shop</Button>
        </div>
        <img src={men} alt="men photos" className="men-photos" />
      </FlexDiv>
      <FlexDiv mode="rsa" className="section women">
        <div className="content women-content">
          <Header size="lg" color="white" className="feature-header2">
            Women New Collectoin
          </Header>
          <Button size="wide" color="#000" bg="#fff">
            Show Now
          </Button>
        </div>
        <div className="img-zoom">
          <img src={women} alt="img" className="photo2  " />
        </div>
      </FlexDiv>
    </>
  );
}
export default Features;
