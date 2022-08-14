import {Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

const ProfileScreen = ({navigation, route}) => {
    return (
        <View>
            <Text>Hello {route.params.userName}!</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

export default ProfileScreen;
