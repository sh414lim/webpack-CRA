/* @jsx createElement*/ 
import {createDOM,createElement ,render} from"./react"; 


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

