import {Button, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {HomePresenter, HomeState} from "./homePresenter";
import {container} from "tsyringe";
import {useEffect, useState} from "react";

const HomeScreen = ({navigation}) => {

    // Defines presenter & view state
    const [presenter] = useState<HomePresenter>(container.resolve(HomePresenter))
    const [viewState, setViewState] = useState<HomeState>(presenter.initState)

    // Uses "useEffect" to subscribe ViewState from the presenter
    // "Return" part unsubscribes the ViewState when the screen is unmounted
    useEffect(() => {
        const sub = presenter.observableState$().subscribe(setViewState)
        return () => sub.unsubscribe()
    }, [])

    // UI definition
    return (
        <View>
            <StatusBar style="auto"/>
            <Text>Hello Home!</Text>
            <Text>User: {viewState.user.name}</Text>
            <Text>Loading: {viewState.loading ? "✅" : "❌"}</Text>
            <Text>Error: {viewState.errorMessage.length > 0 ? viewState.errorMessage : "❌"}</Text>
            <Text/>
            <Button
                title="Get stored user"
                onPress={() => presenter.loadDataFromStorage()}
            />
            <Text/>
            <Button
                title="Get cloud user"
                onPress={() => presenter.loadDataFromCloud()}
            />
            <Text/>
            <Button
                title="Save current user"
                onPress={() => presenter.saveUserData()}
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
