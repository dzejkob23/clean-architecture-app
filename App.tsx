import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProfileScreen from "./src/app/feature/Profile";
import HomeScreen from "./src/app/feature/Home";
import {UserProvider} from "./src/sources/provider/UserProvider";

const MainStack = createNativeStackNavigator();

export default () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <MainStack.Navigator>
                    <MainStack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: "Home"
                        }}
                    />
                    <MainStack.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{
                            title: "Profile"
                        }}
                    />
                </MainStack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
}
