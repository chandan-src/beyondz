"use client";

import { useEffect } from "react";

export default function LocomotiveScroll() {
  useEffect(() => {
    (async function () {
      const LS = (await import("locomotive-scroll")).default;
      new LS();
    })();
  }, []);

  return <div></div>;
}
