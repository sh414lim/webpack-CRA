//dom 보다 단순 한  형태의 돔
import { createDOM, render,createElement } from "./react";

// const vdom = {
//   tag: "p",
//   props: {},
//   children: [
//     {
//       tag: "h1",
//       props: {},
//       children: ["react make"],
//     },
//     {
//       tag: "ul",
//       props: {},
//       children: [
//         {
//           tag: "li",
//           props: {
//             style: "color:red",
//           },
//           children: ["first item"],
//         },
//         {
//           tag: "li",
//           props: {
//             style: "color:blue",
//           },
//           children: ["second item"],
//         },
//         {
//           tag: "li",
//           props: {
//             style: "color:green1",
//           },
//           children: ["three item"],
//         },
//       ],
//     },
//   ],
// };

const vdom2 =createElement('p',{},
createElement('h1',{},"리액트 만들기"),
createElement('ul',{},
createElement("li",{style: "color:red",},"첫번째 아이템"),
createElement("li",{style: "color:blue",},"두번째 아이템"),
createElement("li",{style: "color:green",},"세번째 아이템")
)
);

//dom

render(vdom2, document.querySelector("#root"));
