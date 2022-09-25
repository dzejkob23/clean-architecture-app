import {Button, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {HomePresenter} from "./homePresenter";
import {container} from "tsyringe";
import {useState} from "react";

const HomeScreen = ({navigation}) => {
    // Init presenter
    const [presenter] = useState(container.resolve(HomePresenter))
    const [viewState] = useState(presenter.state)
    // Define UI
    return (
        <View>
            <StatusBar style="auto"/>
            <Text>Hello Home!</Text>
            <Text>User: {viewState.user.name}</Text>
            <Text>Loading: {viewState.loading}</Text>
            <Text>Error: {viewState.errorMessage}</Text>
            <Text/>
            <Button
                title="Change user data..."
                onPress={presenter.setUserData}
            />
            <Text/>
            <Button
                title="Go to the Profile screen"
                onPress={() => navigation.navigate('Profile', {
                    userName: viewState.user.name,
                    userAge: viewState.user.age
                })}
            />
        </View>
    );
}

export default HomeScreen;
