import React from "react";
import Header from "./Header";
import { useAtom } from "jotai";
import { headerHeightAtom } from "@/app/atoms";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [headerHeight] = useAtom(headerHeightAtom);

  return (
    <>
      <Header />
      <main
        style={{
          height: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        {children}
      </main>
    </>
  );
}
