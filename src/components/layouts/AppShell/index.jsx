import React from "react";
import Nabar from "..";

const AppShell = ({ children }) => {
  return (
    <main>
      <Nabar />
      {children}
    </main>
  );
};

export default AppShell;
