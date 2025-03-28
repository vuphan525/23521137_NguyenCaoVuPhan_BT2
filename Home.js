import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Alert,
} from "react-native";

export default function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [isInformationValid, setInformationValid] = useState(true);

    const handleLogin = () => {
        if (!password || !username) {
            Alert.alert("Error", "Do not leave any fields blank");
            return;
        }

        if (password == "baitaplogin" && username == "baitaplogin") {
            setIsLogin(true);
        } else {
            setInformationValid(false);
            Alert.alert("Error", "Wrong password or username");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Login</Text>
            <Text style={styles.information}>Username</Text>
            <TextInput
                style={[
                    styles.input,
                    { borderColor: isInformationValid ? "black" : "red" },
                ]}
                placeholder="Placeholder"
                value={username}
                onChangeText={setUsername}
            />
            <Text style={styles.information}>Password</Text>
            <TextInput
                style={[
                    styles.input,
                    { borderColor: isInformationValid ? "black" : "red" },
                ]}
                placeholder="******* ****** **** *****"
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Confirm and Continue</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    label: {
        fontSize: 20,
        padding: 10,
    },
    information: {
        alignSelf: "flex-start",
    },
    input: {
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 10,
        padding: 10,
        alignSelf: "stretch",
        marginBottom: 30,
    },
    button: {
        padding: 15,
        marginTop: 10,
        backgroundColor: "black",
        borderRadius: 15,
        alignSelf: "stretch",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});
