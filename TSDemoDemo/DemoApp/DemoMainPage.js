import React, { Component } from 'react';
import { View, Button } from "react-native";

// Demo 的主页
export default class Main extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", backgroundColor:"#F5F5F5"}}>
                <Button
                    style={{height: 60, marginTop:40, backgroundColor:"red"}}
                    title={"page1"}
                    onPress={()=>{this.props.navigation && this.props.navigation.navigate('demo_page1')}}
                />

                <Button
                    style={{height: 60, marginTop:40, backgroundColor:"red"}}
                    title={"Table 型首页"}
                    onPress={()=>{this.props.navigation && this.props.navigation.navigate('demo_tableHome1')}}
                />

                <Button
                    style={{height: 60, marginTop:40, backgroundColor:"red"}}
                    title={"Collection 型首页"}
                    onPress={()=>{this.props.navigation && this.props.navigation.navigate('demo_collectionHome1')}}
                />
            </View>
        );
    }
}
