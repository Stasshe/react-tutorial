"use client";

import { useEffect } from "react";
import BackButton from "@/componets/back";

export default function page02() {
  useEffect(() => {
    console.log("About page mounted");
    return () => {
      console.log("About page unmounted");
    };
  }, []);

  return (
    <>
      <BackButton />
      <h1>Welcome to the About Page</h1>
      <p>This is a simple about page component.</p>
    </>
  );
}