import { useParams } from "react-router";

interface RouterParams {
    coinid:string,
}

function Coin(){
    const {coinid} =useParams<RouterParams>();
    return(
        <h1>Coin page :{coinid}</h1>
    )
}
export default Coin; 