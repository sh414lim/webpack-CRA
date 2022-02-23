
const hooks= [];

let currentComponent = 0;


export class Component{
  constructor(props){
    this.props = props;
  }
}

export function createDOM(node) {
  if (typeof node === "string" || typeof node === 'number') {
    return document.createTextNode(node);
  }

  const elememt = document.createElement(node.tag);

  node.props && Object.entries(node.props).forEach(([name, value]) =>
    elememt.setAttribute(name, value)
  );

  node.children.map(createDOM).forEach(elememt.appendChild.bind(elememt));

  return elememt;
}

  const makeProps=(props,children)=>{
    return{
      ...props,
      children: children.length === 1 ? children[0] : children
    }
  }

  function useState(initValue){
    //hook 에 값을 저장 상태 유지 - 위치는 hooks 배열
    let position = currentComponent -1;
    if(!hooks[position]){
      hooks[position] =initValue;
    }

    const modifier =newValue=>{
      hooks[currentComponent]=newValue;
    };

    return[hooks[currentComponent],modifier]
  }

//children => 가변인자
export function createElement(tag,props,...children){
  if(typeof tag === 'function'){
    if(tag.prototype instanceof Component){
      const instance = new tag(makeProps(props,children));
      return instance.render();
    }


    hooks[currentComponent] =null;
    currentComponent++;

    if(children.length > 0){
      return tag(makeProps(props,children));
    }else{
      return tag(props);
    }
  }
  
  return { 
      tag,
      props,
      children,
    }
  
}

export const render = (function(){
  let prevDom = null;

  return function(vdom,container){
    if(prevDom === null){
      prevDom = vdom;
    }

    //diff

  container.appendChild(createDOM(vdom));

  }
})();



// export function render(vdom, container) {
//   //dom
// }
