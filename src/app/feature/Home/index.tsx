import {Button, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {HomePresenter} from "./homePresenter";
import {container} from "tsyringe";

const HomeScreen = ({navigation}) => {
    // Init presenter
    const presenter = container.resolve(HomePresenter)

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
