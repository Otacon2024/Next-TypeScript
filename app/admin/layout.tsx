import React from "react";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div>
      <aside>Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
