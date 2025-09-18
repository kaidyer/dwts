"use client";

import { useState } from "react";

export default function Home() {
  const [teamOne, setT1Name] = useState("Team Kai");
  const [teamTwo, setT2Name] = useState("Team Jenna");

  const [teamOneNumbers, setTeamOneNumbers] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [teamTwoNumbers, setTeamTwoNumbers] = useState([0, 0, 0, 0, 0, 0, 0]);

  const handleTeamOneNumberChange = (index: number, value: string) => {
    const newNumbers = [...teamOneNumbers];
    newNumbers[index] = Number(value) || 0;
    setTeamOneNumbers(newNumbers);
  };

  const handleTeamTwoNumberChange = (index: number, value: string) => {
    const newNumbers = [...teamTwoNumbers];
    newNumbers[index] = Number(value) || 0;
    setTeamTwoNumbers(newNumbers);
  };

  const teamOneSum = teamOneNumbers.reduce((a, b) => a + b, 0);
  const teamTwoSum = teamTwoNumbers.reduce((a, b) => a + b, 0);

  return (
    <div className="p-8 flex content-center">
      <div className="w-1/2 gap-4 mb-6 flex flex-col items-center">
        <input
          type="text"
          value={teamOne}
          onChange={(e) => setT1Name(e.target.value)}
          className="text-4xl font-bold border-b border-gray-400 mb-6 w-full text-center focus:outline-none"
        />
        {teamOneNumbers.map((num, idx) => (
          <input
            key={idx}
            type="number"
            value={num}
            onChange={(e) => handleTeamOneNumberChange(idx, e.target.value)}
            className="text-2xl font-semibold border-b border-gray-300 mb-4 w-2/3 text-center focus:outline-none"
          />
        ))}
        <div className="text-3xl font-bold mt-4">Sum: {teamOneSum}</div>
      </div>

      <div className="w-px bg-gray-400 h-screen"></div> {/* vertical line */}

      <div className="w-1/2 gap-4 mb-6 flex flex-col items-center">
        <input
          type="text"
          value={teamTwo}
          onChange={(e) => setT2Name(e.target.value)}
          className="text-4xl font-bold border-b border-gray-400 mb-6 w-full text-center focus:outline-none"
        />
        {teamTwoNumbers.map((num, idx) => (
          <input
            key={idx}
            type="number"
            value={num}
            onChange={(e) => handleTeamTwoNumberChange(idx, e.target.value)}
            className="text-2xl font-semibold border-b border-gray-300 mb-4 w-2/3 text-center focus:outline-none"
          />
        ))}
        <div className="text-3xl font-bold mt-4">Sum: {teamTwoSum}</div>
      </div>
    </div>
  );
}