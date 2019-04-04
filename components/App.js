import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import Card from './Card';
import Login from './Login';

class App extends React.Component {
    render() {
        return (
        
            <View>
                <Header title="LOGIN"/>
                <Login/>
                {/* <Text  style={{ fontSize:32 }} >Kantapong Chaloemkitwanit S60020141520026</Text>
                <Card/> */}
            </View>
        );
    }
}
export default App;
