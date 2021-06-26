import React from "react";
import Header from "../../components/Header/Header";
import { isAdmin } from "../../services/admin";
const AdminWraper = ({ isSignedIn, children }) => {
  const [comp, setComp] = React.useState(<Header>Unauthorized</Header>);
  React.useEffect(async () => {
    if (!isSignedIn) {
      setComp(<Header>Unauthorized</Header>);
    } else {
      const admin = await isAdmin();
      if (admin) {
        setComp(children);
      }
    }
  }, [isSignedIn]);
  return <div>{comp}</div>;
};
export default AdminWraper;
