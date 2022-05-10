import React, { useState } from "react";
import Cicle from "./Circle";

function App() {
  const [value, setValue] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;

    setValue(value);
  };
  const onSubmitt = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello", value);
  };

  return (
    <div>
      <Cicle bgCikir="teal" />
      <Cicle bgCikir="color" />
      <form onSubmit={onSubmitt}>
        <input
          type="text"
          placeholder="로그인 아이디"
          value={value}
          onChange={onChange}
        />
        <button>로그인 버튼</button>
      </form>
    </div>
  );
}

export default App;
