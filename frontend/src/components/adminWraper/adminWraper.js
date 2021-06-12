import React from "react";
import "./adminWraper.css";
const AdminWraper = ({ isSignedIn, ...props }) => {
  const [comp, setComp] = React.useState(<h1>Unauthorized</h1>);
  const isAdmin = () => {
    return fetch("http://localhost:8080/admin", {
      headers: {
        authorization: sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return data.success;
      });
  };
  React.useEffect(async () => {
    if (!isSignedIn) {
      setComp(<h1>Unauthorized</h1>);
    } else {
      const admin = await isAdmin();
      if (admin) {
        setComp(props.children);
      }
    }
  }, [isSignedIn]);
  return <div>{comp}</div>;
};
export default AdminWraper;
