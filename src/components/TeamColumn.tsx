"use client";
import { Dispatch, SetStateAction } from "react";

type Props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  numbers: number[];
  setNumbers: Dispatch<SetStateAction<number[]>>;
};

export default function TeamColumn({ name, setName, numbers, setNumbers }: Props) {
  const handleNumberChange = (index: number, value: string) => {
    const newNumbers = [...numbers];
    newNumbers[index] = Number(value) || 0;
    setNumbers(newNumbers);
  };

  const sum = numbers.reduce((a, b) => a + b, 0);

  return (
    <div className="w-1/2 gap-4 mb-6 flex flex-col items-center">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-4xl font-bold border-b border-gray-400 mb-6 w-full text-center focus:outline-none"
      />
      {numbers.map((num, idx) => (
        <input
          key={idx}
          type="number"
          value={num}
          onChange={(e) => handleNumberChange(idx, e.target.value)}
          className="text-2xl font-semibold border-b border-gray-300 mb-4 w-2/3 text-center focus:outline-none"
        />
      ))}
      <div className="text-3xl font-bold mt-4">Sum: {sum}</div>
    </div>
  );
}