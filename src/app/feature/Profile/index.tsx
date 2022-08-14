import {Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

const ProfileScreen = ({navigation, route}) => {
    return (
        <View>
            <Text>Hello {route.params.userName}!</Text>
            <Text>I'm {route.params.userAge} years old.</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

export default ProfileScreen;
