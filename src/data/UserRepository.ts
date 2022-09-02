import {User} from "../model/User";
import UserContext from "../sources/UserContext";
import {useContext} from "react";

export function loadUserData() {
    useContext(UserContext).setUser(new User('Jakub', 30))
}

export function loadUserData2() {
    return new User('Jakub', 30);
}
