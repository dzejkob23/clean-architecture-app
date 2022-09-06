import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {User} from "../../model/User";

export type UserContextValue = {
    user: [
        User | undefined,
        Dispatch<SetStateAction<User | undefined>>
    ]
}

const UserContext = createContext<UserContextValue>({} as any)

export function UserProvider(props: { children: ReactNode }) {
    const user = useState<User>(new User("unknown", -1))
    const contextValue = {user}
    return (
        <UserContext.Provider value={contextValue}>{props.children}</UserContext.Provider>
    )
}

export function useUserContext() {
    return useContext(UserContext)
}