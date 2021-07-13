import React from "react";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import Header from "../Header/Header";
import gsap, { Power4 } from "gsap";
import {
  ImgContainer,
  FeatuersImg,
  FeaturesText,
  FeaturesButton,
  OpacityHeader,
  FeaturesTallImgsContainer,
  FeaturesTallImgContainer,
} from "./features.styles";
const fadeIn = (element) => {
  gsap.to(element, {
    opacity: 1,
    duration: 2,
    y: 0,
    ease: Power4.easeOut,
  });
};
const fadeOut = (element) => {
  gsap.to(element, {
    opacity: 0.6,
    duration: 2,
    y: 50,
    ease: Power4.easeOut,
  });
};
const Features = () => {
  const divs = React.useRef([]);
  React.useEffect(() => {
    const options = {
      threshold: 0,
      rootMargin: "0px",
    };
    let observer = new IntersectionObserver((entries, observer) => {
      for (let i = 0; i < entries.length; i++) {
        entries[i].isIntersecting
          ? fadeIn(entries[i].target)
          : fadeOut(entries[i].target);
      }
    }, options);

    for (let i = 0; i < divs.current.length; i++) {
      divs.current[i] && observer.observe(divs.current[i]);
    }
    return () => {
      for (let i = 0; i < divs.current.length; i++) {
        divs.current[i] && observer.unobserve(divs.current[i]);
      }
    };
  }, []);
  return (
    <>
      <ImgContainer
        ref={(d) => {
          divs.current.push(d);
        }}
      >
        <FeatuersImg src={img1} />
        <Header size="lg" color="#fff">
          All The Cloth You Like In One Place
        </Header>
        <FeaturesText>
          do not miss our new collection it will make you look the best
        </FeaturesText>
        <FeaturesButton>Show Now</FeaturesButton>
      </ImgContainer>
      <FeaturesTallImgsContainer className="margin-bottom">
        <FeaturesTallImgContainer
          ref={(d) => {
            divs.current.push(d);
          }}
        >
          <FeatuersImg src={img2} />
          <OpacityHeader>Best summer dresses</OpacityHeader>
        </FeaturesTallImgContainer>
        <FeaturesTallImgContainer
          ref={(d) => {
            divs.current.push(d);
          }}
        >
          <FeatuersImg src={img3} />
          <OpacityHeader>Great kids outfits</OpacityHeader>
        </FeaturesTallImgContainer>
      </FeaturesTallImgsContainer>
      <ImgContainer
        ref={(d) => {
          divs.current.push(d);
        }}
      >
        <FeatuersImg src={img4} />
        <Header size="lg" color="#fff">
          New Kids Collection that will blow you mind
        </Header>
        <FeaturesText>
          do not miss our new collection it will make you look the best
        </FeaturesText>
        <FeaturesButton>Show Now</FeaturesButton>
      </ImgContainer>
      <ImgContainer
        ref={(d) => {
          divs.current.push(d);
        }}
      >
        <FeatuersImg src={img5} />
        <Header size="lg" color="#fff">
          Best Winter Clothes
        </Header>
        <FeaturesText>
          do not miss our new collection it will make you look the best
        </FeaturesText>
        <FeaturesButton>Show Now</FeaturesButton>
      </ImgContainer>
    </>
  );
};
export default Features;
