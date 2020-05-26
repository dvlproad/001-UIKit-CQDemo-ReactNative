import React, {Component}  from 'react';
import { View, Button } from "react-native";

export default class DemoNormalPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", backgroundColor:"#F5F5F5"}}>
                <Button
                    style={{height: 60, marginTop:40, backgroundColor:"green"}}
                    title={"返回首页"}
                    onPress={()=>{this.props.navigation && this.props.navigation.navigate('main')}}
                />
            </View>
        )
    }
}
