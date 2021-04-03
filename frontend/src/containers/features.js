import React from "react";
import Feature from "../components/feature/feature";
function Features() {
  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/collections")
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {state.map((feature, index) => {
        return (
          <Feature
            direction={
              index % 3 === 0
                ? ""
                : index % 3 === 1
                ? "col"
                : index % 3 === 2
                ? "rev"
                : ""
            }
            img={feature.image}
            header={feature.header}
            key={index}
          />
        );
      })}
    </div>
  );
}
export default Features;
