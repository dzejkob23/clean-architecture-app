import {Button, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {HomePresenter} from "./homePresenter";
import {container} from "tsyringe";
import {useState} from "react";

const HomeScreen = ({navigation}) => {
    // Init presenter
    const [presenter] = useState(container.resolve(HomePresenter))
    // Define UI
    return (
        <View>
            <Text>Hello Home!</Text>
            <StatusBar style="auto"/>
            <Button
                title="Change user data..."
                onPress={ presenter.setUserData }
            />
            <Button
                title="Go to the Profile screen"
                onPress={() => navigation.navigate('Profile', {userName: presenter.user.name, userAge: presenter.user.age })}
            />
        </View>
    );
}

export default HomeScreen;
