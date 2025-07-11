import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "@/components/layout/_partials/navigation";
import Footer from "@/components/layout/_partials/footer";

function Layout() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
