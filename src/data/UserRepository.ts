import {User} from "../model/User";
import {useUserContext} from "../sources/provider/UserProvider";

export function loadUserData() {
    const {user: [user, setUser]} = useUserContext();
    setUser(new User('Karel', 44))
}