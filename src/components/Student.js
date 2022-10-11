import React from "react";
import { useDispatch } from "react-redux";

export default function Student({ student }) {
  const dispatch = useDispatch();
  return (
    <div className="studentCard">
      <h3>{student.name}</h3>
      <img className="student-pic" src={student.img} alt="" />
      <div>
        <button
          onClick={() => dispatch({ type: "ADD_FRONTEND", payload: student })}
          className="button-24"
        >
          Front Enders 4 Lyfe
        </button>
        <button
          onClick={() => dispatch({ type: "ADD_BACKEND", payload: student })}
          className="button-24"
        >
          In the Backend, it totally matters
        </button>
      </div>
    </div>
  );
}
