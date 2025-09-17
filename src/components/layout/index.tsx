import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "@/components/layout/_partials/navigation";
import { Toaster } from "@/components/ui/sonner";

function Layout() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document
      .querySelector(".output")
      ?.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Navigation />
      <Outlet />
      <Toaster />
    </>
  );
}

export default Layout;
