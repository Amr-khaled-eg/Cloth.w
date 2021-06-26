import React from "react";
import AdminWraper from "./AdminWraper";
import AdminDashboard from "../../components/adminDashboard/adminDashboard";
const Admin = ({ isSignedIn }) => {
  return (
    <AdminWraper isSignedIn={isSignedIn}>
      <AdminDashboard />
    </AdminWraper>
  );
};
export default Admin;
