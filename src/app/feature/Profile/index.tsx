import {Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {ProfilePresenter, ProfileState} from "./profilePresenter";
import {useEffect, useState} from "react";
import {container} from "tsyringe";
import {User} from "../../../model/User";

const ProfileScreen = ({navigation, route}) => {

    const [presenter] = useState<ProfilePresenter>(container.resolve(ProfilePresenter))
    const [viewState, setViewState] = useState<ProfileState>(presenter.initState)

    useEffect(() => {

        // Set navigation parameters
        presenter.setInputParams(
            new User(route.params.userName, route.params.userAge)
        )

        const sub = presenter.observableState$().subscribe(setViewState)
        return () => sub.unsubscribe()
    }, [])

    return (
        <View>
            <Text>Hello {viewState.user.name}!</Text>
            <Text>Are you really {viewState.user.age} years old?</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

export default ProfileScreen;
