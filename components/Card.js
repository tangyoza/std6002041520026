import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render(){
        return (
            <View>
                <CardSection>
                    <View>
                        <Image 
                            style={{ width:100,
                                    height:100
                                    }}
                            source={{ uri: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}}/>
                        <Text style={{}}>To be Tomorrow</Text>
                        <Text>Pops</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.center}>
                        <Image 
                                style={{ width:350,
                                        height:250,
                                        justifyContent:'center',
                                        alignItems:'center'
                                        }}
                                source={{ uri: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}}/>
                    </View>    
                </CardSection>
                <CardSection >
                    <View style={styles.center}>
                        <View  style={{ width:100, marginTop:20}} >
                            <Button title="Buy" color="#000"/>
                        </View>
                    </View>
                    
                </CardSection>
            </View>
        );
    }
}

const styles ={
    center:{
        justifyContent:'center', alignItems:'center'
    }
}
export default Card;
