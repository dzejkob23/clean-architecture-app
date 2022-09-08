import {Button, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import UserCredentials from "../../components/UserCredentials";
import UserLoadingButton from "../../components/UserLoadingButton";

const HomeScreen = ({navigation}) => {

    return (
        <View>
            <StatusBar style="auto"/>
            <Text>Hello Home!</Text>
            <Text/>
            <UserCredentials/>
            <Text/>
            <UserLoadingButton/>
            <Button
                title="Go to the Profile screen"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}

export default HomeScreen;
