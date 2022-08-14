import {Button, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";

const HomeScreen = ({navigation}) => {
    const [userName, setUserName] = useState('Jakub');

    return (
        <View>
            <Text>Hello Home!</Text>
            <StatusBar style="auto"/>
            <Button
                title="Go to the Profile screen"
                onPress={() => navigation.navigate('Profile', {userName: userName})}
            />
        </View>
    );
}

export default HomeScreen;
