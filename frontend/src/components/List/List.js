import React from "react";
import Header from "../Header/Header";
import "./List.css";
function List({ ListItem, data, header }) {
  return (
    <div className="list">
      {header ? <Header className="list-center">{header}</Header> : null}
      <div className="grid">
        {data.map((item, i) => {
          return <ListItem {...item} key={i} />;
        })}
      </div>
    </div>
  );
}
export default List;
