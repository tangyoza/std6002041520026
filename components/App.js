import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import Card from './Card';

class App extends React.Component {
    render() {
        return (
            <View>
                <Header title="Albums LV3"/>
                <Text  style={{ fontSize:32 }} >Kantapong Chaloemkitwanit S60020141520026</Text>
                <Card/>
            </View>
        );
    }
}
export default App;
