import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
    {/* Notification bar */}
    {/* Navbar */}
      <main>
        <Outlet />
      </main>
    </>
    // Footer
  );
};
