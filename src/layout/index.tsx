import { ReactNode } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
