//dom 보다 단순 한  형태의 돔
import { createDOM, render } from "./react";

const vdom = {
  tag: "p",
  props: {},
  children: [
    {
      tag: "h1",
      props: {},
      children: ["react make"],
    },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag: "li",
          props: {
            style: "color:red",
          },
          children: ["first item"],
        },
        {
          tag: "li",
          props: {
            style: "color:blue",
          },
          children: ["second item"],
        },
        {
          tag: "li",
          props: {
            style: "color:green1",
          },
          children: ["three item"],
        },
      ],
    },
  ],
};

//dom

render(vdom, document.querySelector("#root"));
