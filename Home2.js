import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { subjects } from "./data/subjects";

export default function DetailSchedule({ route }) {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Chi tiết môn học</Text>
            <View style={styles.item}>
                <Text style={styles.subjectName}>
                    {item.id} - {item.name}
                </Text>
                <Text>Giảng viên: {item.teacher}</Text>
                <Text>Phòng: {item.classroom}</Text>
                <Text>Buổi học: {item.timeOfDay === 1 ? "Sáng" : "Chiều"}</Text>
                <></>
            </View>
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
        borderRadius: 5,
    },
    subjectName: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
