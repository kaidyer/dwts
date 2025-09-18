"use client";

import { useState } from "react";

export default function Home() {
  const [teamOne, setT1Name] = useState("Team Kai");
  const [teamTwo, setT2Name] = useState("Team Jenna");

  return (
    <div className="p-8 flex content-center">
      <div className="w-1/2 gap-4 mb-6">
        <input
          type="text"
          value={teamOne}
          onChange={(e) => setT1Name(e.target.value)}
          className="text-4xl font-bold border-b border-gray-400 mb-6 w-full text-center focus:outline-none"
        />
      </div>

      <div className="w-px bg-gray-400 h-screen"></div> {/* vertical line */}

      <div className="w-1/2 gap-4 mb-6">
        <input
          type="text"
          value={teamTwo}
          onChange={(e) => setT2Name(e.target.value)}
          className="text-4xl font-bold border-b border-gray-400 mb-6 w-full text-center focus:outline-none"
        />
      </div>
    </div>
  );
}