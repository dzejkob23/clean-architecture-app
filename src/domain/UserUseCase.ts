import {User} from "../model/User";
import {useUserContext} from "../sources/UserContext";
import {loadUserData} from "../data/UserRepository";

export function GetUserUseCase(): User {
    return useUserContext().user != undefined ? this : new User('Karel', 30)
}

export const ObserveUserUseCase = () => useUserContext();

export function LoadFreshUserUseCase() {
    return loadUserData();
}
