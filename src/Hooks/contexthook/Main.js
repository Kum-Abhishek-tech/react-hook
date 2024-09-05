import { createContext } from "react";
import ComponentC from "./ComponentC";

export const UserContext = createContext();
export const ChannelContext = createContext();
const Main = () => {
return(
    <div>
        <UserContext.Provider value={'ABHISHEK'} >
            <ChannelContext.Provider value={'React CODE'}>
                <ComponentC />
            </ChannelContext.Provider>
        </UserContext.Provider>
    </div>
)
}
export default Main;