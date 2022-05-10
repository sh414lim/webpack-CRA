import React, { useState } from "react";
// import styled from "styled-components";

//  const Contaier = styled.div<ContaierProps>`
//       background-color:${props=>props.bgColor}
//  `;

const x = (a: number, b: number) => a + b;

interface ContaierProps {
  bgColor: String;
}

interface CircleProps {
  bgCikir: String;
  borderColor?: string; //Optional
}

// function Cicle(props: CircleProps) {

function Cicle({ bgCikir }: CircleProps) {
  const [conter, setConter] = useState(1);

  const SayHello = (player: Player) => {
    return `Hello ${player.age} ${player.name}`;
  };

  const test = SayHello({ name: "lim", age: 12 });
  const test2 = SayHello({ name: "suyng", age: 15 });
  return (
    <>
      <h1>{bgCikir}</h1>
      {test}
      {test2}

      {/* <Contaier bgCikir={bgCikir} borderColor={borderColor ?? bgCkir}/> */}
    </>
  );
}

interface Player {
  name: String;
  age: number;
}

export default Cicle;
