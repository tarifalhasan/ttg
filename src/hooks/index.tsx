"use client";
import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatches = () => {
      setMatches(mediaQueryList.matches);
    };

    updateMatches(); // Initial check

    mediaQueryList.addEventListener("change", updateMatches);

    return () => {
      mediaQueryList.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
};

const UseM = () => {
  const isLargeScreen: boolean = useMediaQuery("(min-width: 1024px)");
  return isLargeScreen;
};

export default UseM;
