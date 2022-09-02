import {Button, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {GetUserUseCase, LoadFreshUserUseCase, ObserveUserUseCase} from "../../../domain/UserUseCase";

const HomeScreen = ({navigation}) => {

    // Init state
    const [simpleUser, setSimpleUser] = useState(GetUserUseCase());
    const observedUser = ObserveUserUseCase().user != undefined ? this : simpleUser

    return (
        <View>
            <StatusBar style="auto"/>
            <Text>Hello Home!</Text>
            <Text/>
            <Text>Simple user: {simpleUser.name} {simpleUser.age}</Text>
            <Text>Observable user: {observedUser.name} {observedUser.age}</Text>
            <Text/>
            <Button
                title="Load fresh user data"
                onPress={() => { LoadFreshUserUseCase() }}
            />
            <Button
                title="Go to the Profile screen"
                onPress={() => navigation.navigate('Profile', {userName: simpleUser.name, userAge: simpleUser.age})}
            />
        </View>
    );
}

export default HomeScreen;
