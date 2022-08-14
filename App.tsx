import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProfileScreen from "./src/app/feature/Profile";
import HomeScreen from "./src/app/feature/Home";

const MainStack = createNativeStackNavigator();

export default () => {
    return (
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
    );
}
