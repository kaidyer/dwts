"use client";
import { useState } from "react";
import TeamColumn from "@/components/TeamColumn";

export default function Home() {
  const [teamOne, setTeamOne] = useState("Team Kai");
  const [teamTwo, setTeamTwo] = useState("Team Jenna");
  const [teamOneNumbers, setTeamOneNumbers] = useState(Array(7).fill(0));
  const [teamTwoNumbers, setTeamTwoNumbers] = useState(Array(7).fill(0));

  return (
    <div className="p-8 flex content-center">
      <TeamColumn
        name={teamOne}
        setName={setTeamOne}
        numbers={teamOneNumbers}
        setNumbers={setTeamOneNumbers}
      />

      <div className="w-px bg-gray-400 h-screen"></div> {/* vertical line */}

      <TeamColumn
        name={teamTwo}
        setName={setTeamTwo}
        numbers={teamTwoNumbers}
        setNumbers={setTeamTwoNumbers}
      />
    </div>
  );
}