export function createDOM(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  const elememt = document.createElement(node.tag);

  Object.entries(node.props).forEach(([name, value]) =>
    elememt.setAttribute(name, value)
  );

  node.children.map(createDOM).forEach(elememt.appendChild.bind(elememt));

  return elememt;
}

export function render(vdom, container) {
  //dom
  container.appendChild(createDOM(vdom));
}
