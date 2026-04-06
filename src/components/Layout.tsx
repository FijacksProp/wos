import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundFX from "./BackgroundFX";
import Snowfall from "./Snowfall";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="relative flex min-h-screen flex-col overflow-hidden">
    <BackgroundFX />
    <Snowfall />
    <Header />
    <main className="relative z-10 flex-1 pt-16">{children}</main>
    <Footer />
  </div>
);

export default Layout;
