import {Button, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {GetUserUseCase} from "../../../domain/GetUserUseCase";

const HomeScreen = ({navigation}) => {

    // Init state
    const [user, setUser] = useState(GetUserUseCase());

    return (
        <View>
            <Text>Hello Home!</Text>
            <StatusBar style="auto"/>
            <Button
                title="Go to the Profile screen"
                onPress={() => navigation.navigate('Profile', {userName: user.name, userAge: user.age})}
            />
        </View>
    );
}

export default HomeScreen;
