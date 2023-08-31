import React, { useReducer, useState } from "react";
import TodoView from "./TodoView";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO : 'delete-todo'
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
  }
};

const newTodo = (name) => {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
};

export default function Todo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        name: name,
      },
    });
    setName("");
  };

  // console.log(todos)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <br />
      {todos.map((todo) => {
        return <TodoView key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}
