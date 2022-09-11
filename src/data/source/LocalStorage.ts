import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * This storage is using AsyncStorage that supports iOS, Android and Web.
 * It uses SQLite for Android. Known limits of SQLite: https://www.sqlite.org/limits.html
 *
 * Total storage size is capped at 6MB by default.
 * It's possible to increase it by flags: https://react-native-async-storage.github.io/async-storage/docs/advanced/db_size/
 *
 * Limit per-entry is set by WindowCursor. It's currently 2MB.
 *
 * @see <a href="https://react-native-async-storage.github.io/async-storage/">AsyncStorage Doc</a>
 */

export const getUser = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(storageKey_User)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
        // TODO - add some log command
    }
}

export const setUser = async (userName: string, userAge: number) => {
    try {
        const jsonValue = JSON.stringify({name: userName, age: userAge})
        await AsyncStorage.setItem(storageKey_User, jsonValue)
    } catch (e) {
        // TODO - add some log command
    }
}

const storageKey_User = 'storageKey_User';