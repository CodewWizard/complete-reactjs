import React from "react";
import { ACTIONS } from "./Todo";

export default function TodoView({ todo, dispatch }) {
  return (
    <div>
        <br/>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: {
              id: todo.id,
            },
          })
        }
      >
        Toggle
      </button>{" "}
      &nbsp;
      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: {
              id: todo.id,
            },
          })
        }
      >
        Delete
      </button>
    </div>
  );
}
