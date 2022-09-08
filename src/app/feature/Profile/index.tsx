import {Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import UserCredentials from "../../components/UserCredentials";
import UserLoadingButton from "../../components/UserLoadingButton";

const ProfileScreen = ({navigation, route}) => {
    return (
        <View>
            <StatusBar style="auto"/>
            <Text>Hello Profile!</Text>
            <Text/>
            <UserCredentials/>
            <Text>Are you really so much old?</Text>
            <Text/>
            <UserLoadingButton/>
        </View>
    );
}

export default ProfileScreen;
