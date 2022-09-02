import {createContext, useContext} from "react";
import {User} from "../model/User";

const UserContext = createContext({
    user: undefined,
    setUser: (user: User) => {}
})

export default UserContext;
