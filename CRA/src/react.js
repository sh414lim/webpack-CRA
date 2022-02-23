export class Component {
  constructor(props) {
    this.props = props;
  }
}

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

//props 를 똑같이 만들어주는 함수ㅡ
function makeProps(props, children) {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  };
}

//children => 가변인자
export function createElement(tag, props, ...children) {
  props = props || {};

  if (typeof tag === "function") {
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children));
      return instance.render();
    } else {
      if (children.length > 0) {
        return tag(makeProps(props, children));
      } else {
        return tag(props);
      }
    }
  } else {
    return {
      tag,
      props,
      children,
    };
  }
}

export function render(vdom, container) {
  //dom
  container.appendChild(createDOM(vdom));
}
