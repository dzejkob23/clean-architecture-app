import {Button, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {Presenter} from "./presenter";

const HomeScreen = ({navigation}) => {
    // Init presenter
    const presenter = new Presenter()
    // Init state
    const [userName, setUserName] = useState(presenter);

    return (
        <View>
            <Text>Hello Home!</Text>
            <StatusBar style="auto"/>
            <Button
                title="Go to the Profile screen"
                onPress={() => navigation.navigate('Profile', {userName: presenter.user.name, userAge: presenter.user.age })}
            />
        </View>
    );
}

export default HomeScreen;
