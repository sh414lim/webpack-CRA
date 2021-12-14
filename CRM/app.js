/* @jsx createElement*/ 
import {createDOM,createElement ,render} from"./react"; 

/*
const vdom = {
tag:'p',
props:{},
chlidren:[
    {
        tag:'h1',
        props:{},
        chlidren:[
            "react 만들기"
            ],
        },
        {
            tag:'ul',
            props:{},
            chlidren:[
                {
                    tag:'li',
                    props:{
                        style:"color:red"
                    },
                    chlidren:["첫번쨰 아이템"],
                },
                {
                    tag:'li',
                    props:{
                        style:"color:blue",
                    },
                    chlidren:["두번쨰 아이템"],
                },
                {
                    tag:'li',
                    props:{
                        style:"color:green",
                    },
                    chlidren:["세번쨰 아이템"],
                    style:"color:green"
                },
            ]
            
            
        }
    ],
};

*/

// const vdom =createElement('p',{},
// createElement('h1',{},"리액트 만들기"),
// createElement('ul',{},
// createElement('li',{style:"color:red"},"첫번째 아이템"),
// createElement('li',{style:"color:blue"},"두번째 아이템"),
// createElement('li',{style:"color:green"},"세번째 아이템"),
// )
// );

const  Title=()=>{
    return <h1>react 만들기</h1>
}


const vdom=<p>
    <Title/>
    <ul>
        <li style="color:red">first item </li>
        <li style="color:blue">second item </li>
        <li style="color:green">three item </li>
    </ul>
</p>


render(vdom,document.querySelector("#root")); 

//jsx -> Dom 으로 변환될 간단한 객체를 만들기 위해서 createElement 를 편리함을 추구하기위해서
//html 마크업 구조의 새로운 패러다임(표현방법);
//함수호출구문 이용