import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { subjects } from "./data/subjects";

export default function ScheduleScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>List môn học</Text>
            <FlatList
                data={subjects}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate("Detail", { item })}
                    >
                        <Text style={styles.subjectName}>
                            {index + 1}. {item.name}
                        </Text>
                        <Text>Buổi học: {item.timeOfDay === 1 ? "Sáng" : "Chiều"}</Text>
                        <Text>Phòng: {item.classroom}</Text>
                    </TouchableOpacity>
                )}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "start",
        padding: 20,
    },
    label: {
        fontSize: 20,
        padding: 10,
        alignSelf: "center",
    },
    list: {
        width: "100%",
    },
    item: {
        width: "100%",
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
    },
    subjectName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    button: {
        padding: 15,
        marginTop: 10,
        backgroundColor: "black",
        borderRadius: 20,
        alignSelf: "stretch",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});