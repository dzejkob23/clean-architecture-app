import {User} from "../model/User";
import {useUserContext} from "../data/UserProvider";

export const GetUserUseCase = (): User => {
    return useUserContext().user != undefined ? this : new User('Jakub', 30)
};
