import React, { useEffect, useState } from "react";
import CountUp from "./CountUp";

export default function NuGetDownloads() {
  const [downloads, setDownloads] = useState(null);

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const res = await fetch(
          "https://api-v2v3search-0.nuget.org/query?q=packageid:codegentool"
        );
        debugger
        const result = await res.json();
        // Collect all downloads from nested items
const totalDownloads =
  result?.data?.[0]?.versions?.reduce((sum, version) => {
    return sum + (version?.downloads || 0);
  }, 0) || 0;


        setDownloads(totalDownloads);
      } catch (err) {
        console.error("Failed to fetch NuGet downloads:", err);
      }
    };

    fetchDownloads();
  }, []);

  if (downloads === null) {
    return <span className="text-gray-400">Loading...</span>;
  }

  return (
    <CountUp
      from={0}
      to={downloads}
      duration={2}
      separator=","
      className="inline-block"
    />
  );
}
