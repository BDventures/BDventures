import React, { useState, useEffect, useReducer } from "react";

const reducer = (state, action) => {
  console.log(action, 'action')
  console.log(state, 'state')
  switch (action.type) {
    case "add-todo":
      return { todos: [...state.todos, { text: action.text }] };

    default:
      return state;
  }
};

export const UseReducerTodo = () => {
  const [text, setText] = useState("");
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input
          placeholder="add todos..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </form>

      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
      {todos.map(t => {
        return <div>{t.text}</div>
      })}
    </div>
  );
};
