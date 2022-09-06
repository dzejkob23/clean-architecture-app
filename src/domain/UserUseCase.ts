import {User} from "../model/User";
import {loadUserData} from "../data/UserRepository";
import {useUserContext} from "../sources/provider/UserProvider";

export function GetUserUseCase(): User {
    const {user: [user, setUser]} = useUserContext();
    return user
}

export const ObserveUserUseCase = () => useUserContext();

export function LoadFreshUserUseCase() {
    return loadUserData();
}
