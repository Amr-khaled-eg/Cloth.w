import React from "react";
import Header from "../Header/Header";
import { ListContainer } from "./List.styles";
const List = ({ ListItem, data, header }) => {
  return (
    <ListContainer>
      {header ? <Header className="list-center">{header}</Header> : null}
      {data &&
        data.map((item, i) => {
          return <ListItem {...item} key={i} />;
        })}
    </ListContainer>
  );
};
export default List;
