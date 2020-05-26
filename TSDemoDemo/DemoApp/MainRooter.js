// MainRooter.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './DemoMainPage';
import DemoNormalPage from "./DemoNormalPage";
import DemoTableHomePage from './DemoTableHomePage';
import DemoCollectionHomePage from './DemoCollectionHomePage';

import {
    createStackNavigator,
} from '@react-navigation/stack';

const RootStack = createStackNavigator();


const App = () => {
    // return (
    //     <View style={{flex: 1, justifyContent: "center", backgroundColor:"#F5F5F5"}}>
    //         <Button
    //             style={{height: 60, marginTop:40, backgroundColor:"red"}}
    //             title={"page1"}
    //             // onPress={()=>{this.props.history.push('page1')}}
    //         />
    //     </View>
    // );

    // return (
    //     <Main />
    // );

    // return (
    //     <NavigationContainer>
    //         <Main />
    //     </NavigationContainer>
    // );


    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name='main'
                    component={Main}
                    options={{title: 'APP 主页'}}
                />
                <RootStack.Screen
                    name='demo_page1'
                    component={DemoNormalPage}
                    options={{title: '普通页面 Page1'}}
                />
                <RootStack.Screen
                    name='demo_tableHome1'
                    component={DemoTableHomePage}
                    options={{title: 'Table 型首页'}}
                />
                <RootStack.Screen
                    name="demo_collectionHome1"
                    component={DemoCollectionHomePage}
                    options={{title: 'Collection 型首页'}}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );


    // const DemoPages = [
    //     <RootStack.Screen
    //         name='main'
    //         component={Main}
    //         options={{title: 'APP 主页'}}
    //     />,
    //     <RootStack.Screen
    //         name='demo_page1'
    //         component={Page1}
    //         options={{title: '普通页面 Page1'}}
    //     />,
    //     <RootStack.Screen
    //         name='demo_tableHome1'
    //         component={DemoTableHomePage}
    //         options={{title: 'Table 型首页'}}
    //     />,
    //     <RootStack.Screen
    //         name="demo_collectionHome1"
    //         component={DemoCollectionHomePage}
    //         options={{title: 'Collection 型首页'}}
    //     />,
    // ];
    // return (
    //     <NavigationContainer>
    //         <RootStack.Navigator>
    //             {DemoPages}
    //         </RootStack.Navigator>
    //     </NavigationContainer>
    // );
}

export default App;
