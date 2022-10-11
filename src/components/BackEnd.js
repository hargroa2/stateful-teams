import React from "react";
import Student from "./Student";

export default function BackEnd({ backend }) {
  return (
    <div className="binarybots">
      <h1>BackEnd</h1>
      {backend?.map((student) => (
        <Student key={student.name} student={student} />
      ))}
    </div>
  );
}
