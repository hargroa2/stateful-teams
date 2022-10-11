import React from "react";
import Student from "./Student";

export default function FrontEnd({ frontend }) {
  console.log(frontend);
  return (
    <div className="bc-crew">
      <h1>FrontEnd</h1>
      {frontend?.map((student) => (
        <Student key={student.name} student={student} />
      ))}
    </div>
  );
}
