import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Input from "./components/Input.tsx"; // Import komponen Input yang sudah dibuat

export default function App() {
    const [name, setName] = useState("");
    const [nim, setNim] = useState("");

    return (
        <View style={styles.container}>
            <Text>Nama yang diinput: {name}</Text>
            <Text>NIM yang diinput: {nim}</Text>

            {/* Input untuk Nama */}
            <Input 
                label="Nama" 
                placeholder="Masukkan Nama" 
                value={name} 
                onChangeText={setName} 
            />

            {/* Input untuk NIM */}
            <Input 
                label="NIM" 
                placeholder="Masukkan NIM" 
                keyboardType="numeric" 
                value={nim} 
                onChangeText={setNim} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
});
