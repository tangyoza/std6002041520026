import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render(){
        return (
            <View>
                <CardSection>
                    <View style={{ flexDirection : "row", backgroundColor: 'rgba(0,0,0,0.2)',borderRadius:5}}>
                        <Image 
                            style={{ width:100,
                                    height:100,
                                    borderRadius:1000
                                    }}
                            source={{ uri: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}}/>
                        <View style={{margin:15}}>
                            <Text style={{fontSize:20}}>To be Tomorrow</Text>
                            <Text style={{fontSize:20}}>Pops</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.center}>
                        <Image 
                                style={{ width:350,
                                        height:250,
                                        borderRadius:10,
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
