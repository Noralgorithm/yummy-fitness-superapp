import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <h3>RootLayout</h3>
      <Outlet />
    </>
  );
}

export default RootLayout;
