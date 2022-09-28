import {Button, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {HomePresenter, HomeState} from "./homePresenter";
import {container} from "tsyringe";
import {useEffect, useState} from "react";

const HomeScreen = ({navigation}) => {

    // Define presenter & view state
    const [presenter] = useState<HomePresenter>(container.resolve(HomePresenter))
    const [viewState, setViewState] = useState<HomeState>()

    // Use "useEffect" to subscribe ViewState from the presenter
    // "Return" part unsubscribe the ViewState when the screen is unmounted
    useEffect(() => {
        const sub = presenter.state$.subscribe(setViewState)
        return () => sub.unsubscribe()
    }, [])

    // Define UI
    return (
        <View>
            <StatusBar style="auto"/>
            <Text>Hello Home!</Text>
            <Text>User: {viewState?.user?.name}</Text>
            <Text>Loading: {viewState?.loading}</Text>
            <Text>Error: {viewState?.errorMessage}</Text>
            <Text/>
            <Button
                title="Change user data..."
                onPress={() => presenter.setUserData()}
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
