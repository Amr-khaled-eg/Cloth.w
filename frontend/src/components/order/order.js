import React from "react";
import "./order.css";
import OrderImg from "./order.svg";
import gsap, { Power3 } from "gsap";
const Order = ({ order }) => {
  let myDiv = React.useRef();
  let removeBtn = React.useRef();
  const howMuchToCenter = (elPos, center) => {
    return String(center - elPos);
  };
  const expand = () => {
    if (myDiv.current.style.zIndex !== "2") {
      myDiv.current.style.zIndex = "2";
      let tl = gsap.timeline();
      tl.to(myDiv.current, {
        x:
          howMuchToCenter(
            myDiv.current.getBoundingClientRect().left,
            window.innerWidth / 2
          ) + "px",
        y:
          howMuchToCenter(
            myDiv.current.getBoundingClientRect().bottom,
            window.innerHeight / 2 + 100
          ) + "px",

        ease: Power3.easeIn,
        duration: 0.1,
      })
        .to(
          myDiv.current,
          {
            scale: 2,
            ease: Power3.easeIn,
            duration: 0.1,
          },
          "+=.3"
        )
        .to(removeBtn.current, {
          opacity: 1,
          ease: Power3.easeIn,
          pointerEvents: "all",
          duration: 0.3,
        });
    }
  };
  const getBack = (e) => {
    e.stopPropagation();
    let tl = gsap.timeline();
    tl.to(myDiv.current, {
      scale: 1,
      duration: 0.1,
    })
      .to(
        myDiv.current,
        {
          x: 0,
          y: 0,
          duration: 0.1,
        },
        "+=.3"
      )
      .to(removeBtn.current, {
        opacity: 0,
        ease: Power3.easeIn,
        pointerEvents: "none",
        duration: 0.3,
      })
      .then(() => (myDiv.current.style.zIndex = 0));
  };

  return (
    <div
      className="order-container"
      ref={(div) => (myDiv.current = div)}
      onClick={expand}
    >
      <p className="order-text">
        Products:
        {order.products.map((product) => {
          return `${product.name}:${product.quantity}, `;
        })}
      </p>
      <p className="order-text">To: {order.userInfo.address}</p>
      <p className="order-text">Phone: {order.userInfo.phone}</p>
      <button className="confirm-btn">Confirm</button>
      <img src={OrderImg} alt="order svg" className="order-img" />
      <div
        className="delete"
        onClick={getBack}
        ref={(removeB) => (removeBtn.current = removeB)}
      >
        &#10005;
      </div>
    </div>
  );
};
export default Order;
