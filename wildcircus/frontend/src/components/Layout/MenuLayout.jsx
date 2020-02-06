import React from "react";
import Menu from "./MenuLayout";

function MenuLayout({ children }) {
  return (
    <>
      <Menu />
      <div>{children}</div>
    </>
  );
}

export default MenuLayout;
