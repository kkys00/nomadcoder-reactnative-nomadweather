//import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInputComponent, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: "red", alignContent: 'center' }}>
                <Text style={{ flex: 1 }}> 뒤로 </Text>
            </View>
            <View style={{ flex: 13, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#E5E4E2', borderRadius: 20, height: '50px', maxWidth: '200px', minWidth: '200px', margin: '5px', justifyContent: 'center', alignSelf: 'flex-end' }}>
                        <Text style={{ marginLeft: '20px' }}>질문사항 어쩌구저쩌구</Text>
                    </View>
                    <View style={{ backgroundColor: '#E5E4E2', borderRadius: 20, height: '50px', maxWidth: '200px', minWidth: '200px', margin: '5px', justifyContent: 'center' }}>
                        <Text style={{ marginLeft: '20px' }}>답변 어쩌구저쩌구</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: "green" }}>
                <TextInput></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
