import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="
        flex flex-col min-h-screen
        bg-gradient-to-r from-purple-200 via-pink-100 to-indigo-200
        dark:from-gray-900 dark:via-purple-950 dark:to-black
        bg-[length:200%_200%]
        animate-wave
        transition-colors duration-500
      "
    >
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
