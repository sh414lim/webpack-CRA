//dom 보다 단순 한  형태의 돔


function createDOM(node){
    if(typeof node === 'string'){
        return document.createTextNode(node);
    }
    
   const elememt =  document.createElement(node.tag);
   
   node.children
   .map(createDOM)
   .forEach(elememt.appendChild.bind(elememt));

   return elememt;
}

const vdom = {
    tag:'p',
    props:{},
    children:[
        {
            tag:'h1',
            props:{},
            children:[
                "react make"
            ], 
        },
        {
            tag:'ul',
            props:{},
            children:[
                {
                    tag:'li',
                    props:{},
                    children:[
                        "first item"
                    ]
                },
                {
                    tag:'li',
                    props:{},
                    children:[
                        "second item"
                    ]
                },
                {
                    tag:'li',
                    props:{},
                    children:[
                        "three item"
                    ]
                }
            ]
        }
    ], 
}

//dom
document
.querySelector('#root')
.appendChild(createDOM(vdom));



