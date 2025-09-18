"use client";

import { useState } from "react";

export default function Home() {
  const [teamOne, setT1Name] = useState("Enter Your Team Name");
  const [teamTwo, setT2Name] = useState("Enter Your Team Name");

  return (
    <div className="p-8">
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={teamOne}
          onChange={(e) => setT1Name(e.target.value)}
          className="text-4xl font-bold border-b border-gray-400 mb-6 w-full focus:outline-none"
        />
        <input
          type="text"
          value={teamTwo}
          onChange={(e) => setT2Name(e.target.value)}
          className="text-4xl font-bold border-b border-gray-400 mb-6 w-full focus:outline-none"
        />
      </div>
    </div>
  );
}