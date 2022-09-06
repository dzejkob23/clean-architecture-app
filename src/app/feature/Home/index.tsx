import {Button, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {UserProvider} from "../../../sources/provider/UserProvider";
import UserCredentials from "../../components/UserCredentials";
import {loadUserData} from "../../../data/UserRepository";

const HomeScreen = ({navigation}) => {

    return (
        <UserProvider>
            <View>
                <StatusBar style="auto"/>
                <Text>Hello Home!</Text>
                <Text/>
                <UserCredentials/>
                <Text/>
                <Button
                    title="Load fresh user data"
                    onPress={loadUserData}
                />
                {/*<Button*/}
                {/*    title="Go to the Profile screen"*/}
                {/*    onPress={() => navigation.navigate('Profile', {userName: user.name, userAge: user.age})}*/}
                {/*/>*/}
            </View>
        </UserProvider>
    );
}

export default HomeScreen;
