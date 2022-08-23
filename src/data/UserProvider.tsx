import {User} from "../model/User";
import {createContext, ReactNode, useContext, useState} from "react";

export type UserContextValue = { user: User | undefined }

const UserContext = createContext<UserContextValue>({} as any)

export function UserProvider(props: { children: ReactNode }) {
    const [user, setUser] = useState<User>()
    const contextValue = { user }
    return <UserContext.Provider value={contextValue}>{props.children}</UserContext.Provider>
}

export function useUserContext() {
    return useContext(UserContext)
}
