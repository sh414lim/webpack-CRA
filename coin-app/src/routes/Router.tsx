import {BrowserRouter,Switch,Route} from "react-router-dom";
import Coin from "./Coin";

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                    <Route path="/:coinid">
                        <Coin/>
                    </Route>
                <Route path="/home" >
                    <Coin/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;