import "reflect-metadata";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProfileScreen from "./src/app/feature/Profile";
import HomeScreen from "./src/app/feature/Home";
import {container, Lifecycle} from "tsyringe";
import {HomePresenter} from "./src/app/feature/Home/homePresenter";
import {GetUserUseCase} from "./src/domain/feature/user/use_case/GetUserUseCase";
import {UserRepository} from "./src/domain/feature/user/repository/UserRepository";
import {UserRepositoryImpl} from "./src/data/UserRepositoryImpl";

container.register(HomePresenter, {useClass: HomePresenter})
container.register(GetUserUseCase, {useClass: GetUserUseCase})
container.register("UserRepository",
    {useClass: UserRepositoryImpl},
    {lifecycle: Lifecycle.Singleton}
)

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
